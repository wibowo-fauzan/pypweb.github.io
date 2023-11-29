<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="testing">
    <title>{{ $title }}</title>
    @include('linkstyle.linkstyle')
</head>

<body class="home page-template-default page page-id-6 wp-embed-responsive theme-noor woocommerce-js full-width x10 dima-transparent-navigation-active dima-full-width-active dima-animated-menu-active dima_page_title_is_off footer_big_active animation-active is-lazy lazy-small-placeholder noor-ver-5.8.5 wpb-js-composer js-comp-ver-6.7.0 vc_responsive dima-shortcodes-version3_2_5">
    <div id="dima-wrapper" class="all_content">
        @include('layout.header')
        <main>
            @include('content.content')
        </main>
    </div>
    @include('layout.footer')
    @include('linkscriping.linkscriping')
</body>
</html>