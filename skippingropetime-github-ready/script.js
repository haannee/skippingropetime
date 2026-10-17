const video=document.getElementById('art-video');const play=document.getElementById('play-toggle');const sound=document.getElementById('sound-toggle');const fit=document.getElementById('fit-toggle');const stage=document.querySelector('.video-stage');play.addEventListener('click',async()=>{if(video.paused){try{await video.play()}catch(e){} }else video.pause();updatePlay()});video.addEventListener('play',updatePlay);video.addEventListener('pause',updatePlay);function updatePlay(){play.textContent=video.paused?'▶ PLAY':'❚❚ PAUSE'}sound.addEventListener('click',()=>{video.muted=!video.muted;sound.textContent=video.muted?'♪ SOUND OFF':'♪ SOUND ON'});
// Independent play/pause buttons for the additional motion studies.
document.querySelectorAll('.experiment-window').forEach((windowEl)=>{
 const clip=windowEl.querySelector('video');
 const toggle=windowEl.querySelector('.experiment-toggle');
 const sync=()=>{toggle.textContent=clip.paused?'▶ PLAY':'❚❚ PAUSE';toggle.setAttribute('aria-label',(clip.paused?'Play':'Pause')+' '+clip.getAttribute('aria-label'));};
 toggle.addEventListener('click',async()=>{if(clip.paused){try{await clip.play()}catch(e){}}else{clip.pause()}sync();});
 clip.addEventListener('play',sync);clip.addEventListener('pause',sync);sync();
});
