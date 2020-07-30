<p>
<img width="260" height="170" src="https://davidjohncoleman.com/wp-djc/wp-content/uploads/2017/06/HBTN-Borderless-CMYK-Logo-Vertical-Color-Black@1200ppi-300x236.png" align="right" >
</p>





# :colombia: 0x03 Sass & Scss                                                              
- What Sass means
- How to write Sass & Scss file
- What is the difference between Sass and Scss
- What is the Sass preprocessing
- How to declare a variable
- How to use nested definition
- How to import a Sass file
- How to use mixins
- How to declare extend/inheritance styles
- How to manipulate operators
## Examples
## Prerequisites
- All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
- All your files should end with a new line
- All your Scss files should have a comment at the beginning (i.e. syntax above)
- All your files should start by a comment describing the task
## Built With
- Sass 3.7.4
## Contributing
-- Yesid Gutierrez - Holberton Student                                          
## Versioning
for my learning in Holberton School
## Authors
---Yesid Gutierrez  944@holbertonshcool.com                                    
                                                                               
## Files

|             File               |             Description                  |
|--------------------------------| ---------------------------------------- |
|**0-debug_log.scss**| Sass file that prints Hello World in the debug output  |
|**1-color_variable.scss**| Sass file that asign the text color #3D3D3D to the HTML tags body and p  |
|**2-color_variables.scss**| Sass file that asign text color and background color to body.p and body.h2 |
|**3-nested_tag.scss**| file that asign: no margin-no padding in body, margin 10px to all p inside body  |
|**4-nested_class.scss**| file that asign: text #3D3D3D elements inside body, text-color #FF0000 to body.red tag |
|**5-nested_child.scss**| file that asign: text #3D3D3D elements inside body, text-color #FF0000 to body.red tag--nested |
|**6-nested_hover.scss**| file that asign: #FF0000 to button tags, and button:hover text-color change to #00FF00  |
|**7-nested_deeper.scss**| file that asign: Font size 14px to all body tags Font size 16px to all h1 tags inside body tagsFont size 12px to h1 tags of class .smaller inside body tags  |
|**8-mixin_margins.scss**| Sass file that assigns: Margin left and right at 10px to body tags  Margin left and right at 15px to div tags  You must use a mixin  |
|**9-extend_list.scss**| Sass file that assigns: Font size 12px to all tags of class .info  Text color #00FF00 to all tags of class .success and extend style of the class .info  Text color #FF0000 to all tags of class .warning and extend style of the class .info  |
|**10-import_colors.scss**| Sass file that assigns: Text color $red from 10-colors.scss to the class .red  Text color $green from 10-colors.scss to the class .green  Text color $blue from 10-colors.scss to the class .blue  You must use @import  |
|**11-loop_photos.scss**| Sass file that creates a class for each name in the list $list-names and assigns the background image based on the name: You must use @import  You must use @each statement  |
|**12-loop_header.scss**| Sass file that creates H* tags, where ‘*’ is the size of the font used.  h1 must have font size equal to 1px, h2 must have font size equal to 2px, etc. You must create H* tags from 1 to 5  You must use @for statement  |