import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProductList = [
  {
    title: 'Terraform Controller',
    link: '/terranetes-controller',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Enable developers and teams to self-serve their application dependencies
        independently, whilst being assured they are inline of company policies
        and budgets.
      </>
    ),
  },
  {
    title: 'tf2helm',
    link: '/tf2helm',
    Svg: require('@site/static/img/self-serve.svg').default,
    description: (
      <>
        Simplify the creation of cloud resources via Kubernetes by automatically
        generating reusable helm charts based off of pre-existing Terraform
        Module repositories.
      </>
    ),
  },
];

function Product({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
