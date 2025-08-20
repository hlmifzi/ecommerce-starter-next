"use client";

import { useEffect } from 'react';

export function useCartAnimation() {
  useEffect(() => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const floatingCart = document.getElementById('floatingCart');
    const cartIcon = document.querySelector('.cartButton');

    if (!addToCartBtn || !floatingCart || !cartIcon) return;

    const animateCart = (e: MouseEvent) => {
      // Clone the button for animation
      const clone = addToCartBtn.cloneNode(true) as HTMLElement;
      clone.style.position = 'absolute';
      clone.style.top = `${e.clientY}px`;
      clone.style.left = `${e.clientX}px`;
      clone.style.transform = 'translate(-50%, -50%)';
      clone.style.zIndex = '1000';
      document.body.appendChild(clone);

      // Get final position (cart icon)
      const cartRect = cartIcon.getBoundingClientRect();
      const endX = cartRect.left + cartRect.width/2 - e.clientX;
      const endY = cartRect.top + cartRect.height/2 - e.clientY;

      // Set CSS variables for animation end point
      document.documentElement.style.setProperty('--end-x', `${endX}px`);
      document.documentElement.style.setProperty('--end-y', `${endY}px`);

      // Start animation
      clone.style.animation = `floatToCart 0.8s forwards`;

      // Remove clone after animation
      setTimeout(() => {
        document.body.removeChild(clone);
        
        // Show floating cart animation
        floatingCart.style.left = `${e.clientX}px`;
        floatingCart.style.top = `${e.clientY}px`;
        floatingCart.style.opacity = '1';
        floatingCart.style.animation = 'none';
        void floatingCart.offsetWidth; // Trigger reflow
        floatingCart.style.animation = `floatToCart 0.8s forwards`;
        
      }, 800);
    };

    addToCartBtn.addEventListener('click', animateCart);

    return () => {
      addToCartBtn.removeEventListener('click', animateCart);
    };
  }, []);
}