import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';


const FeatureList = [
  {
    title: 'Self Service Cloud Resources',
    imageLight: '/img/self-serve.svg',
    imageDark: '/img/self-serve-dark.svg',
    description: (
      <>
        Allows developers and teams to self-serve their application dependencies
        independently, while being assured they are inline of company policy.
      </>
    ),
  },
  {
    title: 'Enforce Security Policy Checks',
    imageLight: '/img/security.svg',
    imageDark: '/img/security-dark.svg',
    description: (
      <>
        Platform teams may enforce technical controls to verify resources meet
        their security guidelines. These controls are also applied to all
        terraform sub-modules, to ensure nothing gets missed.
      </>
    ),
  },
  {
    title: 'Predicted Cost Management',
    imageLight: '/img/costs.svg',
    imageDark: '/img/costs-dark.svg',
    description: (
      <>
        Integrates with cost management tools, allowing developers to view and
        manage spend more efficiently.
      </>
    ),
  },
];

function Feature({ title, imageLight, imageDark, description }) {
  const imageUrl1 = useBaseUrl(imageDark);
  const imageUrl2 = useBaseUrl(imageLight);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          sources={{
            light: imageUrl2,
            dark: imageUrl1,
          }}
          alt="Feature Image"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}