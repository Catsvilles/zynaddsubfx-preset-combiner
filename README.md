# ZynAddSubFX-Preset-Combiner
A tool / experiment to create new ZynAddSubFX presets using the XML .xpf format that LMMS uses. Give it two or more .xpf files and it combines them in different ways.

The licensing for the project is MIT. It includes FileSaver.js which is also under the MIT license, but it is not made by me. The XML parser is made by Craig Buckler. It explictly states it can be used without any restrictions. https://www.sitepoint.com/how-to-convert-xml-to-a-javascript-object/

At the moment, only add synths are used and only the first voice is used. Up to two effects are also randomized.

This code is rather unwieldy due to having a large amount of variables to randomize and parsing XML. I cleaned it up some, but I probably won't be working on it any time soon. It's serving it's purpose for myself as is at the moment. If someone else wants to contribute code, feel free to do so. It potentially could produce even better or complex sounds if it supported a second voice for add synths and also supported pad synths.
