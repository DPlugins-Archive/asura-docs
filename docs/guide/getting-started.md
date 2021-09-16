
# Getting Started


<section class="video-lesson"><a href="https://youtube.com/playlist?list=PLaN3YIeFObKkVsfR-gcRHaDfoOM0ej8Rz" target="_blank" title="Watch the full video course on dPlugins's YouTube Channel">Watch the full video course on dPlugins's YouTube Channel</a></section>


<br>
<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/MFVLqjeiYog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Installation


### Server Requirements

The Asura plugin has a few system requirements. Of course, all of these requirements are satisfied by the [modern hosting](https://www.digitalocean.com/?refcode=acb41ca21dc2), so it's highly recommended that you use [modern hosting](https://www.digitalocean.com/?refcode=acb41ca21dc2) to run the Asura plugin. 

You will need to make sure your server meets the following requirements:

- PHP 7.4+
- WordPress 5.5+
- MySQL 5.7.7+ or MariaDB 10.2.2+ (*[old database support](http://localhost:3000/guide/getting-started.html#older-databaser-support))
- PDO PHP Extension
- OpenSSL PHP Extension
- Mbstring PHP Extension

<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/rcKrTAjNpQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


### Installing Asura

Log in and download the latest Asura plugin from the [Customer Portal](https://dplugins.com/checkout/downloads/).

If you have a copy of the plugin as a zip file, you can manually upload it and install it through the Plugins admin screen.

1. Navigate to **Plugins > Add New**.
2. Click the **Upload Plugin** button at the top of the screen.
3. Select the zip file from your local filesystem.
4. Click the **Install Now** button.
5. When installation is complete, you’ll see “Plugin installed successfully.” Click the **Activate Plugin** button at the bottom of the page.
6. Navigate to **Oxygen > Asura**
7. Click the **System Info** tab at the top of the screen.
8. Click **Get Dababase Migration Status** button to get status of database migration status. Make sure the printed status is **Yes** for the `Ran?` column for each row. If you get different status, try to re-activate the plugin.

```
+------+----------------------------------------------------------+-------+
| Ran? | Migration                                                | Batch |
+------+----------------------------------------------------------+-------+
| Yes  | 2020_08_11_114123_create_licenses_table                  | 1     |
| Yes  | 2020_08_12_045744_create_generators_table                | 1     |
| Yes  | .......                                                  | 1     |
| Yes  | .......                                                  | 1     |
| Yes  | .......                                                  | 1     |
+------+----------------------------------------------------------+-------+
```

Please read the [official documentation](https://wordpress.org/support/article/managing-plugins/#manual-upload-via-wordpress-admin) for plugin installation instructions.


### Initial Configuration

Asura uses the API system on its core, allowing to manage Asura on multiple websites from a single admin page.
The admin page is fully AJAX experience.
The API system is requiring credentials to authorize each action and access.

To allow you to manage your local installed Asura, you need to generate a new API credential with full access and register the API credential to the Remote management.

1. Navigate to **Oxygen > Asura**
2. Click the **Remotes** tab at the top of the screen.
3. Click the **Initiate 🌱** button on the top right of the screen.
4. When initialization is complete, you’ll see a new remote on the Remotes list table and a new API on the APIs list table.

Now you are able to manage your local installed Asura.


### Plugin Automatic Update

Get the latest version of Asura plugin by registering your installed plugin on the admin page.

1. Navigate to **Oxygen > Asura**
2. Click the **Settings** tab at the top of the screen.
3. Input your plugin license key in the “License Key” field.
4. Click **Save Changes** button to register your installed plugin.

When the new version is avaiable, you will get the update notification and do update right on the **Dashboard > Updates**.

### Next Steps

Now that you have install your Asura plugin, you may be wondering what to learn next. First, we strongly recommend becoming familiar with how Asura works by reading the following documentation:

- [Design Set](./design-set)
- [API](./api)
- [Remote](./remote)
- [License](./license)

<section class="video-lesson"><a href="https://youtube.com/playlist?list=PLaN3YIeFObKkVsfR-gcRHaDfoOM0ej8Rz" target="_blank" title="Watch the full video course on dPlugins's YouTube Channel">Watch the full video course on dPlugins's YouTube Channel</a></section>


### Older Databaser Support

Asura recommend you to use the latest / in active maintenance version of database. In case upgrading to latest version of database is not possible, you need to turn on the *old database support* by adding the below snippet code on your `wp-config.php` file to allow Asura run.

```
define( 'ASURA_OLD_DB_SUPPORT', true );
```

Below is the common error will you get when you are using the old database without turning on the *old database support*.

#### Column Data Type

A native JSON data type support is only available since MySQL 5.7.8.


#### Index Lengths & MySQL / MariaDB

By default, Asura uses the utf8mb4 character set.
