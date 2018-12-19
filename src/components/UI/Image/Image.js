import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/opacity.css';

const image = (props) => (
  <div>
    <LazyLoadImage
      placeholderSrc={props.placeholderSrc}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      effect="opacity" />
  </div>
);

export default image;