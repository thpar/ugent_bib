## UGent Bibliography ###

This Drupal module uses the API of [Ghent University Academic Bibliography]['biblio'] to fetch publications
of a given UGent student or personnel member and display them as a block or a page on a Drupal site.

The module creates a block that can be added to any node or user-page. If it can find a field `field_ugent_id` in the bundle, 
it will display the publications by this author, if any. If no such field is found, the Default UGent ID for the site is used,
which can be set in the configuration options. 

The module also offers a page `publications` which also renders the publications of the Default UGent ID.

The UGent ID can be found in the [UGent Phone Book][phonebook].

[biblio]: https://biblio.ugent.be/
[phonebook]: https://telefoonboek.ugent.be/
