<b>Download Chrome Extension:</b><br>
https://chrome.google.com/webstore/detail/azan-decrypt/lmffohencfjcmgodmepkjajnfgbokcli?hl=de<br><br>

<b>Paywall Hack / Issue</b></br>

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
<li>08/2017: release scripts & chrome extension</li>
</ul>

<b>2. PoC</b></br>

    var iv = "F27D5C9927726BCEFE7510B1BDD3D137";
    var salt = "3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55";
    var keySize = 128;
    var iterationCount = 100;
    var passPhrase = "Zeitungsverlag Aachen GmbH";


<b>3. responsible disclosure</b></br>
responsible disclosure until 04.08.2017
</ul>
