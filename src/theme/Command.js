import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export const DeployTerranetesController = () => {
  return (
    <Tabs>
      <TabItem value="Helm">
        <CodeBlock className={`language-shell`}>
        $ helm repo add appvia https://terranetes-controller.appvia.io<br />
        $ helm repo update<br />
        $ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace<br />
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}
