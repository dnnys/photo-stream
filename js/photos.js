(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="much-snow-much-wow" style="background-image: url('/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg')" title="Much Snow Much Wow">
  <img class="lazyload" data-src="/photos/thumbnail/Much%20Snow%20Much%20Wow-ccf4df.jpg" src="/photos/tint/Much%20Snow%20Much%20Wow-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Much%20Snow%20Much%20Wow-686656.jpg')"></span>
  </span>
  <a class="open" href="/much-snow-much-wow" data-target="much-snow-much-wow">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/xmas-tree" data-target="xmas-tree" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="xmas-tree" style="background-image: url('/photos/tint/Xmas%20Tree-65ba1d.jpg')" title="Xmas Tree">
  <img class="lazyload" data-src="/photos/thumbnail/Xmas%20Tree-ccf4df.jpg" src="/photos/tint/Xmas%20Tree-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Xmas%20Tree-686656.jpg')"></span>
  </span>
  <a class="open" href="/xmas-tree" data-target="xmas-tree">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/much-snow-much-wow" data-target="much-snow-much-wow" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="not-your-classic-xmas-shot" style="background-image: url('/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg')" title="Not Your Classic Xmas Shot">
  <img class="lazyload" data-src="/photos/thumbnail/Not%20Your%20Classic%20Xmas%20Shot-ccf4df.jpg" src="/photos/tint/Not%20Your%20Classic%20Xmas%20Shot-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Not%20Your%20Classic%20Xmas%20Shot-686656.jpg')"></span>
  </span>
  <a class="open" href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/xmas-tree" data-target="xmas-tree" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="a-boring-photo-of-a-tree" style="background-image: url('/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.JPG')" title="A boring photo of a tree">
  <img class="lazyload" data-src="/photos/thumbnail/A%20boring%20photo%20of%20a%20tree-ccf4df.JPG" src="/photos/tint/A%20boring%20photo%20of%20a%20tree-65ba1d.JPG" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/A%20boring%20photo%20of%20a%20tree-686656.JPG')"></span>
  </span>
  <a class="open" href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/not-your-classic-xmas-shot" data-target="not-your-classic-xmas-shot" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2018</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="checking-out-winterwonderland" style="background-image: url('/photos/tint/Checking%20out%20Winterwonderland-65ba1d.JPG')" title="Checking out Winterwonderland">
  <img class="lazyload" data-src="/photos/thumbnail/Checking%20out%20Winterwonderland-ccf4df.JPG" src="/photos/tint/Checking%20out%20Winterwonderland-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Checking%20out%20Winterwonderland-686656.JPG')"></span>
  </span>
  <a class="open" href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/a-boring-photo-of-a-tree" data-target="a-boring-photo-of-a-tree" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2018</li>
    <!-- <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="lake-davos-winterwonderland" style="background-image: url('/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.JPG')" title="Lake Davos Winterwonderland">
  <img class="lazyload" data-src="/photos/thumbnail/Lake%20Davos%20Winterwonderland-ccf4df.JPG" src="/photos/tint/Lake%20Davos%20Winterwonderland-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lake%20Davos%20Winterwonderland-686656.JPG')"></span>
  </span>
  <a class="open" href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/checking-out-winterwonderland" data-target="checking-out-winterwonderland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/christina-in-davos" data-target="christina-in-davos" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2018</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="christina-in-davos" style="background-image: url('/photos/tint/Christina%20in%20Davos-65ba1d.JPG')" title="Christina in Davos">
  <img class="lazyload" data-src="/photos/thumbnail/Christina%20in%20Davos-ccf4df.JPG" src="/photos/tint/Christina%20in%20Davos-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Christina%20in%20Davos-686656.JPG')"></span>
  </span>
  <a class="open" href="/christina-in-davos" data-target="christina-in-davos">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lake-davos-winterwonderland" data-target="lake-davos-winterwonderland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/happy-birthday" data-target="happy-birthday" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2018</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="happy-birthday" style="background-image: url('/photos/tint/Happy%20Birthday-65ba1d.JPG')" title="Happy Birthday">
  <img class="lazyload" data-src="/photos/thumbnail/Happy%20Birthday-ccf4df.JPG" src="/photos/tint/Happy%20Birthday-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Happy%20Birthday-686656.JPG')"></span>
  </span>
  <a class="open" href="/happy-birthday" data-target="happy-birthday">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/christina-in-davos" data-target="christina-in-davos" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/davos" data-target="davos" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2018</li>
    <!-- <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="davos" style="background-image: url('/photos/tint/Davos-65ba1d.JPG')" title="Davos">
  <img class="lazyload" data-src="/photos/thumbnail/Davos-ccf4df.JPG" src="/photos/tint/Davos-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Davos-686656.JPG')"></span>
  </span>
  <a class="open" href="/davos" data-target="davos">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/happy-birthday" data-target="happy-birthday" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/accidental-wes-anderson" data-target="accidental-wes-anderson" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="accidental-wes-anderson" style="background-image: url('/photos/tint/Accidental%20Wes%20Anderson-65ba1d.JPG')" title="Accidental Wes Anderson">
  <img class="lazyload" data-src="/photos/thumbnail/Accidental%20Wes%20Anderson-ccf4df.JPG" src="/photos/tint/Accidental%20Wes%20Anderson-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Accidental%20Wes%20Anderson-686656.JPG')"></span>
  </span>
  <a class="open" href="/accidental-wes-anderson" data-target="accidental-wes-anderson">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/davos" data-target="davos" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snowflakes-coming-down" data-target="snowflakes-coming-down" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snowflakes-coming-down" style="background-image: url('/photos/tint/Snowflakes%20coming%20down-65ba1d.JPG')" title="Snowflakes coming down">
  <img class="lazyload" data-src="/photos/thumbnail/Snowflakes%20coming%20down-ccf4df.JPG" src="/photos/tint/Snowflakes%20coming%20down-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snowflakes%20coming%20down-686656.JPG')"></span>
  </span>
  <a class="open" href="/snowflakes-coming-down" data-target="snowflakes-coming-down">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/accidental-wes-anderson" data-target="accidental-wes-anderson" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snowing" data-target="snowing" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snowing" style="background-image: url('/photos/tint/Snowing-65ba1d.JPG')" title="Snowing">
  <img class="lazyload" data-src="/photos/thumbnail/Snowing-ccf4df.JPG" src="/photos/tint/Snowing-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snowing-686656.JPG')"></span>
  </span>
  <a class="open" href="/snowing" data-target="snowing">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snowflakes-coming-down" data-target="snowflakes-coming-down" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snow-in-the-city-ii" data-target="snow-in-the-city-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/600</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="snow-in-the-city-ii" style="background-image: url('/photos/tint/Snow%20in%20the%20city%20II-65ba1d.jpg')" title="Snow in the city II">
  <img class="lazyload" data-src="/photos/thumbnail/Snow%20in%20the%20city%20II-ccf4df.jpg" src="/photos/tint/Snow%20in%20the%20city%20II-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snow%20in%20the%20city%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/snow-in-the-city-ii" data-target="snow-in-the-city-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snowing" data-target="snowing" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/snow-in-the-city" data-target="snow-in-the-city" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="snow-in-the-city" style="background-image: url('/photos/tint/Snow%20in%20the%20city-65ba1d.JPG')" title="Snow in the city">
  <img class="lazyload" data-src="/photos/thumbnail/Snow%20in%20the%20city-ccf4df.JPG" src="/photos/tint/Snow%20in%20the%20city-65ba1d.JPG" height="1366" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Snow%20in%20the%20city-686656.JPG')"></span>
  </span>
  <a class="open" href="/snow-in-the-city" data-target="snow-in-the-city">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snow-in-the-city-ii" data-target="snow-in-the-city-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017:12:08 22:31:  </li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="best-ramen-in-town-ii" style="background-image: url('/photos/tint/Best%20ramen%20in%20town%20II-65ba1d.JPG')" title="Best ramen in town II">
  <img class="lazyload" data-src="/photos/thumbnail/Best%20ramen%20in%20town%20II-ccf4df.JPG" src="/photos/tint/Best%20ramen%20in%20town%20II-65ba1d.JPG" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Best%20ramen%20in%20town%20II-686656.JPG')"></span>
  </span>
  <a class="open" href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/snow-in-the-city" data-target="snow-in-the-city" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/best-ramen-in-town" data-target="best-ramen-in-town" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="best-ramen-in-town" style="background-image: url('/photos/tint/Best%20ramen%20in%20town-65ba1d.JPG')" title="Best ramen in town">
  <img class="lazyload" data-src="/photos/thumbnail/Best%20ramen%20in%20town-ccf4df.JPG" src="/photos/tint/Best%20ramen%20in%20town-65ba1d.JPG" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Best%20ramen%20in%20town-686656.JPG')"></span>
  </span>
  <a class="open" href="/best-ramen-in-town" data-target="best-ramen-in-town">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/best-ramen-in-town-ii" data-target="best-ramen-in-town-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/best-vietnamese-cuisine-in-town" data-target="best-vietnamese-cuisine-in-town" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="best-vietnamese-cuisine-in-town" style="background-image: url('/photos/tint/Best%20vietnamese%20cuisine%20in%20town-65ba1d.jpg')" title="Best vietnamese cuisine in town">
  <img class="lazyload" data-src="/photos/thumbnail/Best%20vietnamese%20cuisine%20in%20town-ccf4df.jpg" src="/photos/tint/Best%20vietnamese%20cuisine%20in%20town-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Best%20vietnamese%20cuisine%20in%20town-686656.jpg')"></span>
  </span>
  <a class="open" href="/best-vietnamese-cuisine-in-town" data-target="best-vietnamese-cuisine-in-town">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/best-ramen-in-town" data-target="best-ramen-in-town" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/red-light" data-target="red-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li> -->
  </ul>
</li>
<li class="item " id="red-light" style="background-image: url('/photos/tint/Red%20light-65ba1d.jpg')" title="Red light">
  <img class="lazyload" data-src="/photos/thumbnail/Red%20light-ccf4df.jpg" src="/photos/tint/Red%20light-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Red%20light-686656.jpg')"></span>
  </span>
  <a class="open" href="/red-light" data-target="red-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/best-vietnamese-cuisine-in-town" data-target="best-vietnamese-cuisine-in-town" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/christina-browsing" data-target="christina-browsing" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>3.2</li> -->
  </ul>
</li>
<li class="item " id="christina-browsing" style="background-image: url('/photos/tint/Christina%20browsing-65ba1d.jpg')" title="Christina browsing">
  <img class="lazyload" data-src="/photos/thumbnail/Christina%20browsing-ccf4df.jpg" src="/photos/tint/Christina%20browsing-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Christina%20browsing-686656.jpg')"></span>
  </span>
  <a class="open" href="/christina-browsing" data-target="christina-browsing">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/red-light" data-target="red-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/happy-christina" data-target="happy-christina" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="happy-christina" style="background-image: url('/photos/tint/Happy%20Christina-65ba1d.jpg')" title="Happy Christina">
  <img class="lazyload" data-src="/photos/thumbnail/Happy%20Christina-ccf4df.jpg" src="/photos/tint/Happy%20Christina-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Happy%20Christina-686656.jpg')"></span>
  </span>
  <a class="open" href="/happy-christina" data-target="happy-christina">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/christina-browsing" data-target="christina-browsing" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/20171127-dscf0072" data-target="20171127-dscf0072" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="20171127-dscf0072" style="background-image: url('/photos/tint/20171127-DSCF0072-65ba1d.jpg')" title="20171127-DSCF0072">
  <img class="lazyload" data-src="/photos/thumbnail/20171127-DSCF0072-ccf4df.jpg" src="/photos/tint/20171127-DSCF0072-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/20171127-DSCF0072-686656.jpg')"></span>
  </span>
  <a class="open" href="/20171127-dscf0072" data-target="20171127-dscf0072">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/happy-christina" data-target="happy-christina" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-viii" data-target="abandoned-sovjet-stuff-viii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>X100F</li>
    <li>2017</li>
    <!-- <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-viii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20VIII-65ba1d.jpg')" title="Abandoned Sovjet Stuff VIII">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20VIII-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20VIII-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20VIII-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-viii" data-target="abandoned-sovjet-stuff-viii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/20171127-dscf0072" data-target="20171127-dscf0072" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-vii" data-target="abandoned-sovjet-stuff-vii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-vii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20VII-65ba1d.jpg')" title="Abandoned Sovjet Stuff VII">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20VII-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20VII-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20VII-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-vii" data-target="abandoned-sovjet-stuff-vii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-viii" data-target="abandoned-sovjet-stuff-viii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-vi" data-target="abandoned-sovjet-stuff-vi" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-vi" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20VI-65ba1d.jpg')" title="Abandoned Sovjet Stuff VI">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20VI-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20VI-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20VI-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-vi" data-target="abandoned-sovjet-stuff-vi">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-vii" data-target="abandoned-sovjet-stuff-vii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-v" data-target="abandoned-sovjet-stuff-v" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>9.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-v" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20V-65ba1d.jpg')" title="Abandoned Sovjet Stuff V">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20V-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20V-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20V-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-v" data-target="abandoned-sovjet-stuff-v">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-vi" data-target="abandoned-sovjet-stuff-vi" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-iv" data-target="abandoned-sovjet-stuff-iv" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-iv" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20IV-65ba1d.jpg')" title="Abandoned Sovjet Stuff IV">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20IV-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20IV-65ba1d.jpg" height="2048" width="1366" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20IV-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-iv" data-target="abandoned-sovjet-stuff-iv">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-v" data-target="abandoned-sovjet-stuff-v" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-iii" data-target="abandoned-sovjet-stuff-iii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-iii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20III-65ba1d.jpg')" title="Abandoned Sovjet Stuff III">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20III-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20III-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20III-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-iii" data-target="abandoned-sovjet-stuff-iii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-iv" data-target="abandoned-sovjet-stuff-iv" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-i" data-target="abandoned-sovjet-stuff-i" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-i" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20I-65ba1d.jpg')" title="Abandoned Sovjet Stuff I">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20I-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20I-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20I-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-i" data-target="abandoned-sovjet-stuff-i">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-iii" data-target="abandoned-sovjet-stuff-iii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/exploring-annecy-ii" data-target="exploring-annecy-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
<li class="item " id="exploring-annecy-ii" style="background-image: url('/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg')" title="Exploring Annecy II">
  <img class="lazyload" data-src="/photos/thumbnail/Exploring%20Annecy%20II-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy%20II-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Exploring%20Annecy%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/exploring-annecy-ii" data-target="exploring-annecy-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-sovjet-stuff-i" data-target="abandoned-sovjet-stuff-i" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/epic-flare" data-target="epic-flare" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="epic-flare" style="background-image: url('/photos/tint/Epic%20Flare-65ba1d.jpg')" title="Epic Flare">
  <img class="lazyload" data-src="/photos/thumbnail/Epic%20Flare-ccf4df.jpg" src="/photos/tint/Epic%20Flare-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Epic%20Flare-686656.jpg')"></span>
  </span>
  <a class="open" href="/epic-flare" data-target="epic-flare">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/exploring-annecy-ii" data-target="exploring-annecy-ii" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/annecy-light" data-target="annecy-light" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="annecy-light" style="background-image: url('/photos/tint/Annecy%20Light-65ba1d.jpg')" title="Annecy Light">
  <img class="lazyload" data-src="/photos/thumbnail/Annecy%20Light-ccf4df.jpg" src="/photos/tint/Annecy%20Light-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Annecy%20Light-686656.jpg')"></span>
  </span>
  <a class="open" href="/annecy-light" data-target="annecy-light">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/epic-flare" data-target="epic-flare" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/annecy-and-mountains" data-target="annecy-and-mountains" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="annecy-and-mountains" style="background-image: url('/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg')" title="Annecy and Mountains">
  <img class="lazyload" data-src="/photos/thumbnail/Annecy%20and%20Mountains-ccf4df.jpg" src="/photos/tint/Annecy%20and%20Mountains-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Annecy%20and%20Mountains-686656.jpg')"></span>
  </span>
  <a class="open" href="/annecy-and-mountains" data-target="annecy-and-mountains">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/annecy-light" data-target="annecy-light" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/exploring-annecy" data-target="exploring-annecy" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="exploring-annecy" style="background-image: url('/photos/tint/Exploring%20Annecy-65ba1d.jpg')" title="Exploring Annecy">
  <img class="lazyload" data-src="/photos/thumbnail/Exploring%20Annecy-ccf4df.jpg" src="/photos/tint/Exploring%20Annecy-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Exploring%20Annecy-686656.jpg')"></span>
  </span>
  <a class="open" href="/exploring-annecy" data-target="exploring-annecy">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/annecy-and-mountains" data-target="annecy-and-mountains" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-sovjet-stuff-ii" data-target="abandoned-sovjet-stuff-ii" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>Canon</li>
    <li>2016</li>
    <!-- <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li> -->
  </ul>
</li>
<li class="item " id="abandoned-sovjet-stuff-ii" style="background-image: url('/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg')" title="Abandoned Sovjet Stuff II">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Sovjet%20Stuff%20II-ccf4df.jpg" src="/photos/tint/Abandoned%20Sovjet%20Stuff%20II-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Sovjet%20Stuff%20II-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-sovjet-stuff-ii" data-target="abandoned-sovjet-stuff-ii">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/exploring-annecy" data-target="exploring-annecy" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="meta">
    <li>NIKON</li>
    <li>2016</li>
    <!-- <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li> -->
  </ul>
</li>
`);