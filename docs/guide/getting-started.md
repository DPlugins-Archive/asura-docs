
# Getting Started

## Installation


### Server Requirements

The Asura plugin has a few system requirements. Of course, all of these requirements are satisfied by the modern hosting, so it's highly recommended that you use modern hosting to run the Asura plugin. 

You will need to make sure your server meets the following requirements:

- PHP 7.4+
- WordPress 5.5+
- MySQL 5.7.7+ or MariaDB 10.2.2+
- PDO PHP Extension
- OpenSSL PHP Extension
- Mbstring PHP Extension

::: tip DEPENDENCY
The Asura plugin is requiring the [Aether plugin](https://wordpress.org/plugins/aether) installed on your WordPress.
:::


### Installing Aether
This is the simplest method of installing a plugin. To add a plugin using the built-in plugin installer:

1. Navigate to **Plugins > Add New**.
2. Use the search form in the top-right to search “**Aether**”.
3. On the search results that appear, click a plugin’s title to read more about it. This page may contain installation notes, plugin documentation or other useful information.
4. Click the **Install Now** button to install the plugin.
5. Click **Activate** to activate the plugin.

Please read the [official documentation](https://wordpress.org/support/article/managing-plugins/#automatic-plugin-installation) for plugin installation instructions.


### Installing Asura

Log in and download the latest Asura plugin from the [Customer Portal](https://dplugins.com/checkout/downloads/).

If you have a copy of the plugin as a zip file, you can manually upload it and install it through the Plugins admin screen.

1. Navigate to **Plugins > Add New**.
2. Click the **Upload Plugin** button at the top of the screen.
3. Select the zip file from your local filesystem.
4. Click the **Install Now** button.
5. When installation is complete, you’ll see “Plugin installed successfully.” Click the **Activate Plugin** button at the bottom of the page.
6. Navigate to **Aether > Asura**
7. Click the **System Info** tab at the top of the screen.
8. Click **Get Dababase Migration Status** button to get status of database migration status. Make sure the printed status is **Yes** for the `Ran?` column for each migration. If you get different status, try to re-activate the plugin.

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

1. Navigate to **Aether > Asura**
2. Click the **Remotes** tab at the top of the screen.
3. Click the **Initiate 🌱** button on the top right of the screen.
4. When initialization is complete, you’ll see a new remote on the Remotes list table and a new API on the APIs list table.

Now you are able to manage your local installed Asura.


### Plugin Automatic Update

Get the latest version of Asura plugin by registering your installed plugin on the admin page.

1. Navigate to **Aether > Asura**
2. Click the **Settings** tab at the top of the screen.
3. Input your plugin license key in the “License Key” field.
4. Click **Save Changes** button to register your installed plugin.

When the new version is avaiable, you will get the update notification and do updater right on the **Dashboard > Updates**.

### Next Steps

Now that you have install your Asura plugin, you may be wondering what to learn next. First, we strongly recommend becoming familiar with how Asura works by reading the following documentation:

- [Design Set](./design-set)
- [API](./api)
- [Remote](./remote)
- [License](./license)


### Older Databaser Support

Asura recommend you to use the latest / in active maintenance version of database. In case upgrading to latest version of database is not possible, you need to take manual action to allow Asura run.

#### Column Data Type

As of MySQL 5.7.8, MySQL supports a native JSON data type defined by RFC 7159 that enables efficient access to data in JSON (JavaScript Object Notation) documents.

You may configure the database migration by commenting the `$table->json( 'payload' );` and uncomment the `$table->longText( 'payload' );` code:


```php{11,12}
# asura\database\migrations\2020_11_30_000000_create_settings_table.php

public function up() {
    $this->down();
    Schema::create( 'asura_settings', function ( Blueprint $table ): void {
        $table->id();

        $table->string( 'group' )->index();
        $table->string( 'name' );
        $table->boolean( 'locked' );
        $table->longText( 'payload' ); // For those running MariaDB or older versions of MySQL
        // $table->json( 'payload' );

        $table->timestamps();

        $table->engine = 'InnoDB';
    } );
}

```

#### Index Lengths & MySQL / MariaDB

By default, Asura uses the utf8mb4 character set. If you are running a version of MySQL older than the 5.7.7 release or MariaDB older than the 10.2.2 release, you may need to manually configure the default string length generated by migrations in order for MySQL to create indexes for them.

You may configure the default string length by uncommenting the `Schema::defaultStringLength(191);` code:

```php{4}
# asura\app\Providers\AppServiceProvider.php

public function boot() {
    Schema::defaultStringLength(191); // For those running MariaDB or older versions of MySQL

    if ( defined( 'ABSPATH' ) ) {
        Bugsnag::registerCallback( function ( $report ) {
            if ( function_exists( 'is_user_logged_in' ) && is_user_logged_in() ) {
                $report->setUser( User::where( 'ID', wp_get_current_user()->ID )->first()->toArray() );
            }

            $report->setMetaData( [
                'diagnostic_data' => DiagnosticData::getData()
            ] );
        } );
    }

}
```