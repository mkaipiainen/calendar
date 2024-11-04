// injectStrict.ts
import { inject, type InjectionKey } from 'vue';

/**
 * A helper function that wraps Vue's inject and throws an error if the injected value is undefined.
 *
 * @param key - The injection key.
 * @param errorMessage - An optional custom error message.
 * @returns The injected value if it exists.
 * @throws Error if the injected value is undefined.
 */
export function injectStrict<T>(
  key: InjectionKey<T> | string,
  errorMessage?: string,
): T {
  const injectedValue = inject<T>(key);

  if (injectedValue === undefined) {
    throw new Error(errorMessage || `Could not resolve ${String(key)}`);
  }

  return injectedValue;
}
