# The Word of Iron Word Counts
```dataviewjs
const chapters = dv.pages("#chapter");
let wordCounts = [];
let totalCount = 0;
for(const chapter of chapters) {
	let chapter_content = await dv.io.load(chapter.file.path);
	let wordCount = countWords(chapter_content);
	wordCounts.push([chapter.file.name, wordCount]);
	totalCount += wordCount;
}

wordCounts.push(["Total", totalCount]);

dv.table(["Chapter", "Word Count"], wordCounts);

function countWords(str) {
	return str.trim().split(/\s+/).length;
}
```