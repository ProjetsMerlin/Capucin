<?php
$domain = $_SERVER['HTTP_HOST'];
$hide_folder = "/admin";

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
    <link rel="stylesheet" crossorigin href="./style.css">
    <script type="module" crossorigin src="./main.js"></script>
    </head>

    <body>
        <div id="capucin"></div>
    </body>

</html>

<?php endif; ?>