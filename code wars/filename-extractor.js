class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      const beginningIndex = dirtyFileName.indexOf('_') + 1
      const endingIndex = dirtyFileName.lastIndexOf('.')
      const filename = dirtyFileName.slice(beginningIndex, endingIndex)
      console.log(filename);
      return filename;
    }
}

// FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34") // => ,"FILE_NAME.EXTENSION");
FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION") // => "FILE_NAME.EXTENSION");
