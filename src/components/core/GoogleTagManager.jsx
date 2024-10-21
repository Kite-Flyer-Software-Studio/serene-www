import Script from 'next/script'

export default function GoogleTagManager(props) {
  const { gtmId, dataLayerName = 'dataLayer', auth, preview, dataLayer } = props

  const gtmLayer = dataLayerName !== 'dataLayer' ? `&l=${dataLayerName}` : ''
  const gtmAuth = auth ? `&gtm_auth=${auth}` : ''
  const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : ''

  return (
    <>
      <Script
        id="_next-gtm-init"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`,
        }}
      />
      <Script
        id="_next-gtm"
        data-ntpc="GTM"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}`}
      />
      <Script
        id="_next-gtm-init"
        dangerouslySetInnerHTML={{
          __html: `
  var dataLayer = window[${JSON.stringify(dataLayerName)}] = window[${JSON.stringify(dataLayerName)}] || [];

  dataLayer.push('set', 'url_passthrough', true)
  `,
        }}
      />
    </>
  )
}
