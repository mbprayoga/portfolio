import { useEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fluidShader, displayShader } from "@/lib/shaders";

type GradientProps = {
  brushSize?: number;
  brushStrength?: number;
  distortionAmount?: number;
  fluidDecay?: number;
  trailLength?: number;
  stopDecay?: number;
  color1?: [number, number, number];
  color2?: [number, number, number];
  color3?: [number, number, number];
  color4?: [number, number, number];
  colorIntensity?: number;
  softness?: number;
};

export const Gradient = ({
  brushSize = 25.0,
  brushStrength = 0.5,
  distortionAmount = 2.5,
  fluidDecay = 0.98,
  trailLength = 0.8,
  stopDecay = 0.85,
  color1 = [0.95, 0.95, 0.95],
  color2 = [0.92, 0.92, 0.92],
  color3 = [0.82, 0.82, 0.82],
  color4 = [0.3, 0.3, 0.3],
  colorIntensity = 1.0,
  softness = 1.0,
}: GradientProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    while (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    }

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const fluidTarget1 = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
      }
    );

    const fluidTarget2 = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
      }
    );

    let currentFluidTarget = fluidTarget1;
    let previousFluidTarget = fluidTarget2;
    let frameCount = 0;

    const fluidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
        iFrame: { value: 0 },
        iPreviousFrame: { value: null },
        uBrushSize: { value: brushSize },
        uBrushStrength: { value: brushStrength },
        uFluidDecay: { value: fluidDecay },
        uTrailLength: { value: trailLength },
        uStopDecay: { value: stopDecay },
      },
      vertexShader: vertexShader,
      fragmentShader: fluidShader,
    });

    const displayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        iFluid: { value: null },
        uDistortionAmount: { value: distortionAmount },
        uColor1: { value: new THREE.Vector3(...color1) },
        uColor2: { value: new THREE.Vector3(...color2) },
        uColor3: { value: new THREE.Vector3(...color3) },
        uColor4: { value: new THREE.Vector3(...color4) },
        uColorIntensity: { value: colorIntensity },
        uSoftness: { value: softness },
      },
      vertexShader: vertexShader,
      fragmentShader: displayShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const fluidPlane = new THREE.Mesh(geometry, fluidMaterial);
    const displayPlane = new THREE.Mesh(geometry, displayMaterial);

    let mouseX = 0,
      mouseY = 0;
    let prevMouseX = 0,
      prevMouseY = 0;
    let lastMoveTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX - rect.left;
      mouseY = rect.height - (e.clientY - rect.top);
      lastMoveTime = performance.now();
      fluidMaterial.uniforms.iMouse.value.set(
        mouseX,
        mouseY,
        prevMouseX,
        prevMouseY
      );
    };

    const handleMouseLeave = () => {
      fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      fluidMaterial.uniforms.iResolution.value.set(width, height);
      displayMaterial.uniforms.iResolution.value.set(width, height);

      fluidTarget1.setSize(width, height);
      fluidTarget2.setSize(width, height);
      frameCount = 0;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const time = performance.now() * 0.001;
      fluidMaterial.uniforms.iTime.value = time;
      displayMaterial.uniforms.iTime.value = time;
      fluidMaterial.uniforms.iFrame.value = frameCount;

      if (performance.now() - lastMoveTime > 100) {
        fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
      }

      fluidMaterial.uniforms.uBrushSize.value = brushSize;
      fluidMaterial.uniforms.uBrushStrength.value = brushStrength;
      fluidMaterial.uniforms.uFluidDecay.value = fluidDecay;
      fluidMaterial.uniforms.uTrailLength.value = trailLength;
      fluidMaterial.uniforms.uStopDecay.value = stopDecay;

      displayMaterial.uniforms.uDistortionAmount.value = distortionAmount;
      displayMaterial.uniforms.uColorIntensity.value = colorIntensity;
      displayMaterial.uniforms.uSoftness.value = softness;
      displayMaterial.uniforms.uColor1.value.set(...color1);
      displayMaterial.uniforms.uColor2.value.set(...color2);
      displayMaterial.uniforms.uColor3.value.set(...color3);
      displayMaterial.uniforms.uColor4.value.set(...color4);

      fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture;
      renderer.setRenderTarget(currentFluidTarget);
      renderer.render(fluidPlane, camera);

      displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture;
      renderer.setRenderTarget(null);
      renderer.render(displayPlane, camera);

      const temp = currentFluidTarget;
      currentFluidTarget = previousFluidTarget;
      previousFluidTarget = temp;

      frameCount++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }

      fluidTarget1.dispose();
      fluidTarget2.dispose();
      fluidMaterial.dispose();
      displayMaterial.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [
    brushSize,
    brushStrength,
    distortionAmount,
    fluidDecay,
    trailLength,
    stopDecay,
    color1,
    color2,
    color3,
    color4,
    colorIntensity,
    softness,
  ]);

  return <div ref={canvasRef} className="fixed inset-0 z-0 max-w-screen" />;
};
