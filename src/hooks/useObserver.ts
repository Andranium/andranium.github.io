export function useObserver(callback: (entry: any, observer: any) => void) {
  let options = {
    rootMargin: "0px",
    threshold: 1.0,
  }

  return new IntersectionObserver(callback, options)
}
