module.exports = {
    title: 'The Word of Iron', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
    author: 'Zach Hannum <zacharyhannum@gmail.com>', // default to `author` in `package.json` or undefined.
    // language: 'ja', // default to undefined.
    size: '5in 8in', // paper size.
    theme: 'css/theme.print.css', // .css or local dir or npm package. default to undefined.
    entry: [
        {
          path: 'title_page.md',
          theme: 'css/title.css'
        },
        { rel: 'contents', 
          path: 'toc.md',
          theme: 'css/toc.css'
        },
        {
          path: 'dedication.md',
          theme: 'css/dedication.css'
        },
        'chapter_0.md', // `title` is automatically guessed from the file (frontmatter > first heading).
        'chapter_1.md',
        'chapter_2.md',
        'chapter_3.md',
        'chapter_4.md',
        'chapter_5.md',
        'chapter_6.md',
        'chapter_7.md',
        'chapter_8.md',
        'chapter_9.md',
        'chapter_10.md',
        'chapter_11.md',
        // {
        //   path: 'epigraph.md',
        //   title: 'Epigraph', // title can be overwritten (entry > file),
        //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
        // },
        // 'glossary.html', // html can be passed.
    ], // `entry` can be `string` or `object` if there's only single markdown file.
    entryContext: './manuscript', // default to '.' (relative to `vivliostyle.config.js`).
    output: [ // path to generate draft file(s). default to '{title}.pdf'
        './out/The Word of Iron.pdf', // the output format will be inferred from the name.
        {
            path: './out',
            //     format: 'webpub',
        },
    ],
    workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
    toc: 'toc.html', // whether generate and include ToC HTML or not, default to 'false'.
    // cover: './cover.png', // cover image. default to undefined.
    // vfm: { // options of VFM processor
    //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
    //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
    // },
}