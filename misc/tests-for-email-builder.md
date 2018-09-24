
TestCases:

1) All items should be tested for addition and deletion
2) Upon deletion each item should show a confirmation prompt
3) Validate size of image before uploading and if image size exceeds allowed values, should thow an error message to user
4) Should allow saving or sending of a template only if contains a minimum number of items. Should not allow to create and send blank emails
5) Should test the maximum allowed character for a button or image Alt Tile. Should not allow writing an 200 word essay on a button title

Riskiest Parts:

1) No validation on URL being added to images. It could be URL to risky, spam or phishing websites or could be hyperlink to virus programs which download automatically on clicking.

 

BUG
1) Should not allow user to create buttons or sections with same text color as the background color. Should throw an error or warning while creating such an item
   ![Alt text](/img/sameBgTxtColor.png?raw=true "Title")


2) Should not allow user to create a blank button i.e button without any text in it. Should throw an error or warning while creating such an item
 ![Alt text](/img/blankButton.png?raw=true "Title")

3) There is no validation on the type of file being uploaded to images. I was able to upload PDFs, XLS, JS, DOC files to images. Should throw an error while uploading invalid file formats
