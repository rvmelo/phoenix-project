import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

/**
 * Returns a stateful value, and a function to update it.
 * Only updates the state if component is mounted.
 *
 */
export function useSafeState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(initialState)

  const isMountedRef = useRef(false)

  const safeSetState = useCallback<Dispatch<SetStateAction<S>>>(
    (newState) => {
      if (isMountedRef.current) {
        setState(newState)
      }
    },
    [isMountedRef, setState],
  )

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
    }
  }, [])

  return [state, safeSetState]
}
