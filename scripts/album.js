// Example Album
var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
    
        {name: 'Blue', length: '4:26'},
        {name: 'Green', length: '3:14'},
        {name: 'Red', length: '5:01'},
        {name: 'Pink', length: '3:21'},
        {name: 'Magenta', length: '2:15'}
    
    ]
};

//Another Example Album

var albumMarconi = {
    name: 'The Telephone',
    artist: 'Gugliemo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
    
        {name: 'Hello, Operator?', length: '1:01'},
        {name: 'Ring, ring, ring', length: '5:01'},
        {name: 'Fits in you pocket', length: '3:21'},
        {name: 'Can you hear me now?', length: '2:15'},
        {name: 'Wrong phone number', length: '2:15'}

    ] 
};

//Yet Another Example Album

var albumDarlingside = {
    name: 'The Power Station',
    artist: 'Darlingside',
    label: 'EM',
    year: '2014',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
    
        {name: 'Ancestor', length: '1:01'},
        {name: 'Whipporwill', length: '5:01'},
        {name: 'flutter', length: '3:21'},
        {name: 'God of loss', length: '2:15'},
        {name: 'New Amsterdam', length: '2:15'}

    ] 
};

var albumArray = [albumPicasso, albumMarconi, albumDarlingside];

var createSongRow = function(songNumber, songName, songLength) {
    var template =
      '<tr class="album-view-song-item">'
    + ' <td class="song-item-number">' + songNumber + '</td>'
    + ' <td class="song-item-title">' + songName + '</td>'
    + ' <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
    
    return template;
};

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 };
 
 window.onload = function() {
     
     /*window.addEventListener("scroll", function(event) {
         console.log(event);
         console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
     }); 
     
         <img id="myButton" src="http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-chatons.jpg" />
        <script type="text/javascript">
        
            var images = [
                    'http://www.online-image-editor.com/styles/2013/images/example_image.png',
                    'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-chatons.jpg',
                    'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg'
                ],
                
                var albumArray = [albumPicasso, albumMarconi, albumDarlingside];// mine
                
                i = 1;//mine
                
                for (var j = albumArray.length; j--;) { // mine
                var img = new Image;
                img.src = albumArray[j];
                }
                
                document.getElementsByClassName('album-cover-art').addEventListener('click', function() { // mine
                this.src = albumArray[i >= albumArray.length - 1 ? i = 0 : ++i];
            }, false);
                
                i = 1;
            
            for (var j=images.length; j--;) {
                var img = new Image();
                img.src = images[j];
            }

            document.getElementById('myButton').addEventListener('click', function() {
                this.src = images[i >= images.length - 1 ? i = 0 : ++i];
            }, false);*/
     
                i = 1;//mine
                
                /*for (i = 0; var i = albumArray.length; i++;) { // mine
                var img = new Image;
                img.src = albumArray[i];
                }*/
                
                var albumImage = document.getElementsByClassName('album-cover-art')[0];
                
                albumImage.addEventListener( 'click', function(event) { // mine
                this.src = albumArray[i >= albumArray.length - 1 ? i = 0 : ++i];
            }, false);
     
    //setCurrentAlbum(albumPicasso);
 };
    
/*Create a third album object in album.js. Populate the object with the same properties as the other two album objects, but provide values of your choosing.
Add an event listener to the album cover. When a user clicks it, the album page content should toggle between the three album objects: albumPicasso, albumMarconi, and your album object.*/