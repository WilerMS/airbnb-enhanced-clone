import { LegacyRef, useEffect } from "react"

export const useOutsideClick = (
  ref: LegacyRef<HTMLElement>,
  cb = (target: HTMLElement) => { }
) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // @ts-ignore
      ref.current && !ref.current.contains(event.target) && cb(event.target)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)

  }, [ref]);
}