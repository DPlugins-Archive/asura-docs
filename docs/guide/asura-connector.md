# Asura Connector

[Asura Connector](https://wordpress.org/plugins/asura-connector) is the Client plugin for accessing the design set from the creator or seller (let say “_Provider_”).
The plugin is fully integrated with the Oxygen Builder, and you will able to access the design set right on your Oxygen Editor.

<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/Kprjaf-twFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Installation


### Server Requirements

The Asura Connector plugin has a few system requirements. Of course, all of these requirements are satisfied by the modern hosting, so it's highly recommended that you use modern hosting to run the Asura Connector plugin. 

You will need to make sure your server meets the following requirements:

- PHP 7.4+
- WordPress 5.5+

::: tip DEPENDENCY
The Asura Connector plugin is requiring the [Aether plugin](https://wordpress.org/plugins/aether) installed on your WordPress.
:::


### Installing Aether
This is the simplest method of installing a plugin. To add a plugin using the built-in plugin installer:

1. Navigate to **Plugins > Add New**.
2. Use the search form in the top-right to search “**Aether**”.
3. On the search results that appear, click a plugin’s title to read more about it. This page may contain installation notes, plugin documentation or other useful information.
4. Click the **Install Now** button to install the plugin.
5. Click **Activate** to activate the plugin.

Please read the [official documentation](https://wordpress.org/support/article/managing-plugins/#automatic-plugin-installation) for plugin installation instructions.


### Installing Asura Connector

1. Navigate to **Plugins > Add New**.
2. Use the search form in the top-right to search “**Asura Connector**”.
3. On the search results that appear, click a plugin’s title to read more about it. This page may contain installation notes, plugin documentation or other useful information.
4. Click the **Install Now** button to install the plugin.
5. Click **Activate** to activate the plugin.

Please read the [official documentation](https://wordpress.org/support/article/managing-plugins/#automatic-plugin-installation) for plugin installation instructions.



## Adding Provider and License key

To access the design set from the creator or seller (let say “_Provider_”), you need to set up a proper connection to the _Provider_’s site.

If you bought or given access to a design set from the _Provider_, you’ll be given a `connector string` and `license`.

**connector string:** contains a configuration allowing your site to communicate to the _Provider_’s site securely.

**license:** is needed to authenticate you on the _Provider_’s site. Your license is your identity and used to manage the access to design sets and the expiration of access (if subscription-based).


### Adding Provider

1. Navigate to **Aether > Asura Connector**
2. Click the **Add New Provider** button on the top right of the screen.
3. Fill the “Connector String” field with the **`connector string`** from your _Provider_, and click the **Save** button.
4. When submission is complete, you’ll see a new Provider on the list table.


### Adding License

1. Navigate to **Aether > Asura Connector**
2. Click the **Manage License** button from some Provider on the list table.
3. Fill the “License Key” field with the **`license key`** from your _Provider_.
4. Click the **+ Add** button.
5. Back to previous page, and click the **Install Wizard** button on the list table. You’ll see the design set list from your license
6. **(Optional)** If you just start a new website, you may want to install a complete website (demo website) from the design set. Adjust the options and click the “Install” link on the design set you are want to install. The action will import the configuration from the _Provider_’s site.

::: warning BE CAREFULL
Installing a complete website from the design set will deactivate/overwrite your existing design configuration.
:::


## Design Library

Your design set will available on the Oxygen Editor (**+Add > Library > Design Set**).
The design set contains a wide range of page sections, and complete pages.


### Adding Section & Elements to Your pages

From inside Oxygen, go to **+Add > Library > Design Sets**. Choose a Design Set, and then browse to Sections & Elements.

Click an element to add it to your page.

![oxygen editor](https://26bf1td05du17c1e8350wwjp-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/d-dropbox-upwork-manuals-oxygen-design-library-2.png)

<div class="youtube-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/YhoHYahyjxg?start=64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

For complete instructions, you may read the official documentation on [OxygenBuilder.com site](https://oxygenbuilder.com/documentation/design-library/library-overview/)