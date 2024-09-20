const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const files = fs.readdirSync(docsDir);

const categorizedFiles = {};

files.forEach(file => {
  if (file.endsWith('.md') && file !== 'Intro.md') {
    const firstLetter = file[0].toUpperCase();
    if (!categorizedFiles[firstLetter]) {
      categorizedFiles[firstLetter] = [];
    }
    // Remove .md extension
    const fileId = file.replace('.md', '');
    // Create display name by replacing underscores with spaces
    const displayName = fileId.replace(/_/g, ' ');
    categorizedFiles[firstLetter].push({ id: fileId, label: displayName });
  }
});

const sidebarItems = Object.keys(categorizedFiles).sort().map(letter => ({
  type: 'category',
  label: letter,
  items: categorizedFiles[letter].map(item => ({
    type: 'doc',
    id: item.id,
    label: item.label
  })).sort((a, b) => a.label.localeCompare(b.label)),
}));

const sidebarConfig = {
  diseasesSidebar: [
    'Intro',
    {
      type: 'category',
      label: 'Diseases',
      items: sidebarItems,
    },
  ],
};

fs.writeFileSync(
  path.join(__dirname, 'sidebars.js'),
  `module.exports = ${JSON.stringify(sidebarConfig, null, 2)};`
);