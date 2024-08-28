import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import {DeployTerranetesController} from '@theme/Command';

// See translations for label and description

function Cards() {
  const cards = [
    {
      label: translate({message: 'Self Service'}),
      description: translate({
        message:
          'Enable Developers to get the Cloud resources they need immediately, without going through external teams',
      }),
      link: '/terranetes-controller/developer/provision',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/self-service.svg',
    },
    {
      label: translate({message: 'Security'}),
      description: translate({
        message:
          'Protect Cloud Credentials and enforce Checkov policies on Cloud resource configuration',
      }),
      link: '/terranetes-controller/category/administration',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/security.svg',
    },
    {
      label: translate({message: 'Simplicity'}),
      description: translate({
        message:
          'Keep the Terraform Configuration simple to use and easily consume existing modules',
      }),
      link: '/terranetes-controller/developer/tnctl',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/simplicity.svg',
    },
    {
      label: translate({message: 'Cost Estimates'}),
      description: translate({
        message:
          'Directly see cost estimates for your Terraform Plan runs prior to creating the resources',
      }),
      link: '/terranetes-controller/admin/costs',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/cost-estimates.svg',
    },
    {
      label: translate({message: 'Approval Workflows'}),
      description: translate({
        message:
          'Approve changes before application, supporting Terraform Plan and Apply workflows',
      }),
      link: '/terranetes-controller/developer/provision/#approving-a-plan',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/approval-workflows.svg',
    },
    {
      label: translate({message: 'Drift Detection'}),
      description: translate({
        message:
          'Automatically detect any upstream changes in the cloud provider and ensure the Terraform State is inline with the resources it manages',
      }),
      link: '/terranetes-controller/developer/drift',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/drift-detection.svg',
    },
    {
      label: translate({message: 'GitOps'}),
      description: translate({
        message:
          'Leverage FluxCD as a Source for your Terraform Configuration resources',
      }),
      link: '/terranetes-controller/developer/flux',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/gitops.svg',
    },
    {
      label: translate({message: 'Private Sources'}),
      description: translate({
        message: 'Enable the use and consumption of private repositories',
      }),
      link: '/terranetes-controller/developer/private',
      linkText: translate({message: 'Learn More'}),
      imageUrl: 'img/index/features/private-sources.svg',
    },
  ];

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            <Link className={'button button--primary'} href={card.link}>
              {card.linkText}
            </Link>
          </div>
          <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div>
        </div>
      ))}
    </section>
  );
}

function DynamicHeaderImage() {
  const {colorMode} = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Pre-fetch images
  useEffect(() => {
    const images = [];

    const darkLogo = (new Image().src = 'img/index/terranetes-dark.svg');
    images.push(darkLogo);

    const lightLogo = (new Image().src = 'img/index/terranetes-light.svg');
    images.push(lightLogo);
  }, []);

  // // Set dark mode correctly
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark');
  }, [colorMode]);

  return (
    <img
      src={
        isDarkMode
          ? '/img/index/terranetes-dark.svg'
          : '/img/index/terranetes-light.svg'
      }
      height="100"
      alt="Appvia Terranetes Controller"
    />
  );
}

export default function App() {
  const context = useDocusaurusContext();

  return (
    <Layout
      title={`${context.siteConfig.tagline}`}
      description={translate({
        message:
          'The terranetes controller manages the life-cycle of terraform resources defined and built inside Kubernetes.',
      })}
    >
      <header className={classNames('hero', styles.hero)}>
        <div className={classNames(styles.heroContainer)}>
          <span className={classNames(styles.heroImage)}>
            <DynamicHeaderImage />
          </span>
          <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
            <Translate>
              Enabling developers to securely self-serve
            </Translate><br />
            <Translate>
              Cloud dependencies in a controlled manner
            </Translate>
          </div>

          <div className={classNames(styles.commandContainer)}>
            <DeployTerranetesController />
          </div>

          <Link
            className={classNames('button button--primary button--lg')}
            to={'/terranetes-controller/quick_start'}
          >
            <Translate>Quick Start</Translate>
          </Link>
          <br />
          <div className={classNames(styles.productLogos)}>
            <img
              className={classNames(styles.heroPackage)}
              src="/img/index/terraform.svg"
            />
            <img
              className={classNames(styles.heroPackage)}
              src="/img/index/kubernetes.svg"
            />
            <img
              className={classNames(styles.heroPackage)}
              src="/img/index/opentofu.svg"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>
      </main>
    </Layout>
  );
}

