<?php
$domain = $_SERVER['HTTP_HOST'];
$hide_folder = "/admin";

// !!! à rendre dynamique
$urlWp = "http://localhost/capucin/wp/";

function getRemoteSiteIcons($site_url) {
    $api_url = rtrim($site_url, '/') . '/wp-json/';
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code === 200) {
        $data = json_decode($response);
        
        $default = $data->site_icon_url ?? null;
        $icon_32 = isset($data->site_icon_url) ? preg_replace('/(\.\w+)$/', '-32x32$1', $data->site_icon_url) : null;
        $icon_180 = isset($data->site_icon_url) ? preg_replace('/(\.\w+)$/', '-180x180$1', $data->site_icon_url) : null;
        $icon_270 = isset($data->site_icon_url) ? preg_replace('/(\.\w+)$/', '-270x270$1', $data->site_icon_url) : null;
        $icon_512 = isset($data->site_icon_url) ? preg_replace('/(\.\w+)$/', '-512x512$1', $data->site_icon_url) : null;
        
        $links = 
        '
        <link rel="icon" type="image/png" href="'.$default.'" />
        <link rel="shortcut icon" href="'.$default.'" />
        <link rel="apple-touch-icon" sizes="32x32" href="'.$icon_32.'" />
        <link rel="apple-touch-icon" sizes="180x180" href="'.$icon_180.'" />
        <link rel="apple-touch-icon" sizes="270x270" href="'.$icon_270.'" />
        <link rel="apple-touch-icon" sizes="512x512" href="'.$icon_512.'" />
        ';
        return $links;
    }
    
    return null;
}

// !!! à rendre dynamique
$routes = [
    "home" => [
        "label" => "Accueil",
        "priority" => "0.8",
        "lastmod" => "2026-02-04T15:35:00+00:00"
    ],
    "services" => [
        "label" => "Services",
        "priority" => "0.8",
        "lastmod" => "2026-02-04T15:35:00+00:00"
    ],
    "blog" => [
        "label" => "Blog",
        "priority" => "0.8",
        "lastmod" => "2026-02-04T15:35:00+00:00"
    ],
    "a-propos" => [
        "label" => "À Propos",
        "priority" => "0.8",
        "lastmod" => "2026-02-04T15:35:00+00:00"
    ],
    "contact" => [
        "label" => "Contact",
        "priority" => "0.8",
        "lastmod" => "2026-02-04T15:35:00+00:00"
        ]
    ];
    
    if(isset( $_GET["sitemap"] ) && htmlspecialchars($_GET["sitemap"]) === "true") :
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
$sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
    foreach ($routes as $key => $page) {
    $sitemap .= " <url>\n";
        $sitemap .= " <loc>https://" . htmlspecialchars($domain) . "/" . htmlspecialchars($key) . "</loc>\n";
        $sitemap .= " <lastmod>" . htmlspecialchars($page["lastmod"]) . "</lastmod>\n";
        $sitemap .= " <priority>" . htmlspecialchars($page["priority"]) . "</priority>\n";
        $sitemap .= " </url>\n";
    }
    $sitemap .= '</urlset>';
header('Content-Type: application/xml; charset=utf-8');
echo $sitemap;

elseif (isset( $_GET["robots"] ) && htmlspecialchars($_GET["robots"]) === "true") :
header('Content-Type: text/plain; charset=utf-8');
$robots_html = "User-agent: *\n";
$robots_html .= "Disallow: " . $hide_folder . "\n";
$robots_html .= "\n";
$robots_html .= "Sitemap: ";
$robots_html .= !empty($_SERVER["HTTPS"]) ? "https://" : "http://";
$robots_html .= $domain;
$robots_html .= "/sitemap.xml\n";

echo $robots_html;

else : ?>
<!doctype html>
<html lang="fr-BE">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capucin</title>
    <?=  getRemoteSiteIcons($urlWp); ?>
    <link rel="stylesheet" crossorigin href="./style.css">
    <script type="module" crossorigin src="./main.js"></script>
    </head>

    <body>
        <div id="capucin"></div>
    </body>

</html>

<?php endif; ?>