<section class="pre-footer">
  <div class="container">
    <p>MyWhaleWallet.com does not hold your keys for you. We cannot access accounts, recover keys, reset passwords, nor reverse transactions. Protect your keys &amp; always check that you are on correct URL. <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal"> You are responsible for your security.</a>
    </p>
  </div>
</section>

<footer class="footer" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">

      <a href="/"><img src="images/logo-whale.png" height="45px" width="auto" alt="Ether Wallet" class="footer--logo"/></a>

      <p><span translate="FOOTER_1">Free, open-source, client-side interface for generating WhaleCoin wallets &amp; more. Interact with the WhaleCoin blockchain easily &amp; securely. Double-check the URL ( .com ) before unlocking your wallet.</span></p>

      <p><a aria-label="WhaleCoin" href="https://whalecoin.org" target="_blank" rel="noopener" role="link" tabindex="0">
        WhaleCoin Website
      </a></p>

      <p><a href="https://blog.whalecoin.org" target="_blank" rel="noopener" role="link" tabindex="0">
        WhaleCoin Blog
      </a></p>

      <p><a href="https://twtter.com/whalecoinorg" target="_blank" rel="noopener" role="link" tabindex="0">
        WhaleCoin Twitter
      </a></p>

      <p><a data-target="#disclaimerModal" data-toggle="modal" target="_blank" rel="noopener" role="link" tabindex="0"  translate="FOOTER_4"> Disclaimer </a></p>

      <p> &copy; 2017 MyEtherWallet, LLC </p>

    </section>


    <section class="footer--righ">

    </section>

  </article>

</div>


</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }

</main>
</body>
</html>
