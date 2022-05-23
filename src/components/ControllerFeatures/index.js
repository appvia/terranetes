import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Self Service Cloud Resources',
    Svg: require('@site/static/img/self-serve.svg').default,
    description: (
      <>
        Allows developers and teams to self-serve their application dependencies
        independently, while being assured they are inline of company policy.
      </>
    ),
  },
  {
    title: 'Enforce Security Policy Checks',
    Svg: require('@site/static/img/security.svg').default,
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
    Svg: require('@site/static/img/costs.svg').default,
    description: (
      <>
        Integrates with cost management tools, allowing developers to view and
        manage spend more efficiently.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
