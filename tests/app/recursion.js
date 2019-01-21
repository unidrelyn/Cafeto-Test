describe('recursion', () => {
  const fileData = {
    dirName: 'app',
    files: ['index.html'],
    subDirs: [
      {
        dirName: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
        ],
        subDirs: [
          {
            dirName: 'vendor',
            files: [
              'jquery.js',
              'underscore.js',
            ],
            subDirs: [],
          },
        ],
      },
      {
        dirName: 'css',
        files: [
          'reset.css',
          'main.css',
        ],
        subDirs: [],
      },
    ],
  };

  it('you should be able to return a list of files from the data', () => {
    const result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return a list of files in a subdir', () => {
    const result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return the nth number in a fibonacci sequence', () => {
    expect(recursionAnswers.fibonacci(2)).to.eql(1);
    expect(recursionAnswers.fibonacci(6)).to.eql(8);
  });
});
