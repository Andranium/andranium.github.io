export function useObserver(callback: (entry: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => void) {
  const options = {
    rootMargin: '0px',
    threshold: 1.0,
  };

  return new IntersectionObserver(callback, options);
}
