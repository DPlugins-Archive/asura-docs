# E-Commerce Integration

Selling design sets manually is not comfortable and not the way.
The workflow of where the user was waiting for the license to be delivered, even the payment and order was complete instantly, is affecting the user experience.

Hence, tha Asura plugin bundled with native integration for popular e-commerce platform such as WooCommerce and Easy Digital Downloads. **Selling design sets made easy!**


<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/ThVEEm50Zt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br>
<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/6ncIUQLReYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## Prerequisite

1. Navigate to **Oxygen > Asura**
2. Click the **Remotes** tab at the top of the screen.
3. Choose and take a note the remote’s id on the `Site` column from the Remotes list table.
4. Click the **Generators** tab at the top of the screen.
5. Select the target site (step #3) from the “📌 Remote” dropdown on the top right of the screen, and click the **refresh 🔄️** button
6. Choose and take a note the generator’s id on the `Name` column from the Generators list table.


## Asura Settings

### WooCommerce

1. Navigate to **Oxygen > Asura**
2. Click the **Settings** tab at the top of the screen.
3. Click the **WooCommerce** sub-tab.
4. Tick the “Enable Integration” checkbox.
5. (Optional) Tick the “Purchase page” checkbox if you want to show use license on their purchase page.
6. (Optional) Tick the “Receipt Email” checkbox if you want to append the receipt email with the license.
7. click the **Save Changes** button.


### Easy Digital Downloads

1. Navigate to **Oxygen > Asura**
2. Click the **Settings** tab at the top of the screen.
3. Click the **Easy Digital Downloads** sub-tab.
4. Tick the “Enable Integration” checkbox.
5. (Optional) Tick the “Purchase page” checkbox if you want to show use license on their purchase page.
6. (Optional) Tick the “Receipt Email” checkbox if you want to append the receipt email with the license.
7. click the **Save Changes** button.


## Product Configuration

![Product configuration](/images/product-configuration.png)

### WooCommerce

1. Navigate to **Products > All Products**
2. Choose the product and click the “Edit” link.
3. On the right side of your screen, you’ll see **Asura License** metabox.
4. Tick the “Generate?” checkbox.
5. Fill the “Remote [id]” field with the remote ID. Step #3 of [Prerequisite](#prerequisite) section.
6. Fill the “Generator [id]” field with the generator ID. Step #6 of [Prerequisite](#prerequisite) section.
7. Save the product.


### Easy Digital Downloads

1. Navigate to **Downloads > All Downloads**
2. Choose the downloads and click the “Edit” link.
3. On the right side of your screen, you’ll see **Asura License** metabox.
4. Tick the “Generate?” checkbox.
5. Fill the “Remote [id]” field with the remote ID. Step #3 of [Prerequisite](#prerequisite) section.
6. Fill the “Generator [id]” field with the generator ID. Step #6 of [Prerequisite](#prerequisite) section.
7. Save the downloads.


## Preview Page

![Preview Page](/images/preview-page.png)

It is good to show your potential customer a preview of your design sets.

1. Navigate to **Pages > Add New**
2. Fill the page's title.
3. Add new block with type **`[/] shortcode`**
4. Paste the snippet below to the shortcode block
    ```
    [asura_demo designset="all"]
    ```
5. Scroll to the bottom of the gutenberg editor page. You will find the Oxygen meta box.
6. Change the “RENDER PAGE USING TEMPLATE” dropdown value **`None`**
7. Click the **`+ Shortcodes`** link to open the textarea.
8. Paste the snippet below to the **`+ Shortcodes`** textarea
    ```
    [ct_section ct_sign_sha256='8a21d47acd141a46dc84bea6e6dd1c270700a75cc8437dd860b4229a9486ba69' ct_options='{"ct_id":1,"ct_parent":0,"selector":"section-1-454","original":{"section-width":"full-width","container-padding-left":"0","container-padding-top":"0","container-padding-right":"0","container-padding-bottom":"0"},"activeselector":false}'][ct_text_block ct_sign_sha256='129b4fc2a0d46b83d1011bfb15f96a7cf36d5568a86bd2bb7c965b5223291097' ct_options='{"ct_id":2,"ct_parent":1,"selector":"text_block-2-454","original":{"width-unit":"%","width":"100"},"activeselector":false}'][ct_span ct_sign_sha256='543ff191a22689cfbca14744ed7d6b049a5082c72ffcd4569048370962245cdb' ct_options='{"ct_id":3,"ct_parent":2,"selector":"span-3-454","original":{"width-unit":"%","width":"100"},"classes":{"0":"oxy-stock-content-styles"}}'][oxygen ct_sign_sha256='91da15648fe7b933f3cdb8acd28af076791809d0eb0372d7d159a4ce30c02acb' data='content' ][/ct_span][/ct_text_block][/ct_section]
    ```
9. Save the page.
10. Follow the Oxygen’s [official documentation](https://oxygenbuilder.com/documentation/other/security/) on how to sign the shortcode.
