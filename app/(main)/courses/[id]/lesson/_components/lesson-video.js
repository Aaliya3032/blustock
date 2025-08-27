"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const LessonVideo = ({ courseId,lesson,module}) => {
    const [hasWindow, setHasWindow] = useState(false);
    const [started, setStarted] = useState(false);
    const [ended, setEnded] = useState(false);
    const [duration, setDuration] = useState(0);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    },[]);

    useEffect(() => {
        async function updateLessonWatch(){
            const response = await fetch("/api/lesson-watch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId:courseId,
                    lessonId: lesson.id,
                    moduleSlug: module,
                    state: "started", 
                    lastTime: 0 
                })
            });
            if (response.status === 200) {
                const result = await response.text();
                console.log(result);
                setStarted(false);
            }
        }
        started && updateLessonWatch(); 
    },[started]);

    useEffect(() => {
        async function updateLessonWatch(){
            const response = await fetch("/api/lesson-watch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId:courseId,
                    lessonId: lesson.id,
                    moduleSlug: module,
                    state: "completed", 
                    lastTime: duration
                })
            });
            if (response.status === 200) {
                const result = await response.text(); 
                setEnded(false);
                router.refresh();
            }
        }
        ended && updateLessonWatch();  
    },[ended]);

    // YouTube Iframe API events
  useEffect(() => {
    if (!hasWindow) return;

    const onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player("lesson-player", {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING && !started) {
              setStarted(true);
              setDuration(player.getDuration());
            }
            if (event.data === window.YT.PlayerState.ENDED) {
              setEnded(true);
            }
          },
        },
      });
    };

    // Load YouTube Iframe API if not already
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, [hasWindow]);

    return (
        <>
        {
            hasWindow && (
                <iframe
          id="lesson-player"
          width="100%"
          height="470"
          src={`https://www.youtube.com/embed/${extractYouTubeId(
            lesson.video_url
          )}?enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
            )
        }
            
        </>
    );
};

// helper to extract video id from YouTube URL
function extractYouTubeId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
