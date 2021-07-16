# Remote

Asura uses the API system on its core, allowing to manage Asura on multiple websites from a single admin page with fully AJAX experience using the **[Remote](./remote)** feature.

To allow you to manage your installed Asura, you need to generate a new API credential with full access and register the API credential to the Remote management.


## Register new Remote

To register new target site, you can follow the guide on [API credential for Remote feature](./api#api-credential-for-remote-feature) section.


## Manage the Content on the Target Site

If you register the target site using the **`connector string`** into Remote list table, you will able to manage the content on the target site, including `Licenses`, `Generators`, and `APIs`.

The “📌 Remote” dropdown will available on the top right of the screen.
Select the target site from the dropdown, and click the **refresh 🔄️** button. The content from target site will loaded to the admin page.

Any change and action you made will be happened on the target site.

![Remote feature](/images/remote-feature.png)

:::danger
Making change to the APIs on the target site that you have registered on the Remote feature, could affecting your access to the target site.
If you have loss connection to target site, you need to gain back the access by following the guide on **[Register new Remote](#register-new-remote)** section.
:::