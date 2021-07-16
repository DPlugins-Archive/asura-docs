# API

Asura uses the API system on its core, allowing to manage Asura on multiple websites from a single admin page with fully AJAX experience using the [Remote](./remote) feature.

The API system takes your licensing-system to a whole new level with its advanced capabilities in terms of security and extensions, bringing possiblity for 3rd party plugin to interact with the Asura plugin.


## API credential for Remote feature

The API endpoint requiring credentials to authorize each action and access.

To allow you to manage your Asura on target site, you need to generate a new API credential with **full** permission on the target site.


### On the target site:
1. Navigate to **Aether > Asura**
2. Click the **APIs** tab at the top of the screen.
3. Click the **Add New** button on the top of the screen.
4. Fill the “Label” field with any name
5. click the **Submit** button.
6. When submission is complete, you’ll see a new API credential on the APIs list table.
7. Click the **Clipboard** button on the `Permission` column. The **`connector string`** will copied to your clipboard.
8. Save the **`connector string`** into _notepad_ or _textedit_ for later use on the **main site**.


### On the main site:
1. Navigate to **Aether > Asura**
2. Click the **Remotes** tab at the top of the screen.
3. Click the **Add New** button on the top of the screen.
4. Fill the “Connector String” field with **`connector string`** from [previous section](#on-the-target-site), and click the **Submit** button.
5. When submission is complete, you’ll see a new Remotes on the Remotes list table.

Continue by reading the [Remote section](./remote).


## API credential for Asura Connector

Asura Connector is the Client plugin that bridging the client site to your site through the secure connection for accessing the design set.

To allow your client to making connection for accessing the design set on your site, you need to generate a new API credential with **connector** permission on your site.


### On the target site:
1. Navigate to **Aether > Asura**
2. Click the **APIs** tab at the top of the screen.
3. Click the **Add New** button on the top of the screen.
4. Fill the “Label” field with any name, change the “Permission” field to **Connector**, and click the **Submit** button.
5. When submission is complete, you’ll see a new API credential on the APIs list table.
6. Click the **Clipboard** button on the `Permission` column. The **`connector string`** will copied to your clipboard.
7. Save the **`connector string`** into _notepad_ or _textedit_ for later use to give to your friend, or client.

::: warning
Make sure the selected “Permission” field is **Connector**. The connector permission has restricted access.
:::

Continue by reading the [Asura Connector section](./asura-connector).