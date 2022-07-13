import { EffectCallback, useEffect } from 'react';

// mostly to get around exhaustive deps for initializer useEffects
const useInitialize = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useInitialize;
