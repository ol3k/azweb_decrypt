<b>Paywall Issue</b></br>

www.aachener-zeitung.de</br>
www.aachener-nachrichten.de</br>

<b>0. information</b></br>

The websites are offering a mixture of free and payed articles hidden by paywall. (http://www.aachener-zeitung.de/zva/pc/)
The websites use AESUtils and CryptoJS to hide articles.

The provider leaks <b>sensitive data like password, IV and salt which are used for encryption</b> and can be used to decrypt the articles.
<b>This issue does not leak any personal data of (registered) users.</b>

free article: http://www.aachener-zeitung.de/lokales/juelich/zukunft-von-haus-overbach-ist-langfristig-gesichert-1.1610013
hidden article: http://www.aachener-zeitung.de/lokales/juelich/feierabendmarkt-in-juelich-mit-bilderbuchstart-1.1622101

<b>1. timeline</b></br>

<ul>
<li>04.05.2017 20:53: informed "AZ - Lokales" via facebook pages about the possibility to read all hidden content (https://www.facebook.com/azlokalesaachen/)</li>
<li>04.05.2017 21:04: response with information that the issue will be forwarded</li>
</ul>

<b>2. PoC</b></br>
Code will be released after fix or responsible disclosure


<b>3. responsible disclosure</b></br>
disclosure until 04.08.2017
</ul>
