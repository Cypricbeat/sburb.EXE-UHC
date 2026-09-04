 const continuousAudioRanges = [
   { start: 448, end: 450, src: "img/sound/traffic.mp3" },
  { start: 515, end: 516, src: "img/sound/NXtheme2.mp3" },
 ];

 const backSkipMap = {
   "520": 518,
   "705": 701,
 };
module.exports = {
  title: "SBURB.exe",
  summary: "MSPFA",
  description: "A manual port of sburb.EXE",
  author: "Berry",


  trees: {
    './': 'assets://mspfa/SBURB.exe/',
  },

  vueHooks: [
    {
      matchName: "MSPFAPage",
      methods: {
        pwdoing() {
          const links = this.$el.querySelector("#foot #links");
            switch (String(this.pageNum)) {
              case "878":
                const next = this.page.n[0]
                const pass = this.$el.querySelector("#content  #pw-text");
                const btn = this.$el.querySelector("#content  #pw-submit");

                btn.addEventListener("click", () => {
                  if (pass.value === "gljfF1CM") {
                    this.$pushURL(`/mspfa/${this.storyId}/${next}`)
                  }
                });
                if (links) links.style.display = "none"
                break;
              default:
                if (links) links.style.display = ""
        }

        },

        bindFishAudioButton() {
          const btn = this.$el.querySelector("#content button.playFishAudio:not([data-bound])");
          if (!btn) return;
          const audio = this.$el.querySelector("#content audio.fishAudio");
          if (!audio) return;

          btn.addEventListener("click", () => {
            if (audio.paused) {
              audio.currentTime = 0;
              audio.play().catch(() => {});
            } else {
              audio.pause();
            }
          });

          // Keep button text in sync no matter how playback starts/stops
          // (button click, autoplayPage23, the audio ending, etc.)
          audio.addEventListener("play", () => { btn.textContent = "Stop sound"; });
          audio.addEventListener("pause", () => { btn.textContent = "Play sound"; });
          audio.addEventListener("ended", () => { btn.textContent = "Play sound"; });

          btn.setAttribute("data-bound", "true");
        },
        keyNavEvent(dir) {
          const frame = this.$parent.$parent
          const next = this.page.n[0]
          if (dir == 'left' && (this.pageNum - 1) &&  frame.$el.scrollLeft == 0) {
              const target = backSkipMap[String(this.pageNum)];
              if (target !== undefined) {
                this.$pushURL(`/mspfa/${this.storyId}/${target}`);
              } else {
                  this.$pushURL(`/mspfa/${this.storyId}/${this.pageNum - 1}`)
              }
          }
            else if (dir == 'right' && this.story.p[next] && frame.$el.scrollLeft + frame.$el.clientWidth == frame.$el.scrollWidth) {
              if (this.pageNum !== 878) {
                this.$pushURL(`/mspfa/${this.storyId}/${next}`)
            }
        }},
        ensureContinuousAudioEl() {
          if (this._continuousAudioEl) return;
          const el = document.createElement("audio");
          el.style.display = "none";
          el.setAttribute("data-continuous-audio", "true");
          this.$el.appendChild(el);
          this._continuousAudioEl = el;
        },
        updateContinuousAudio() {
          this.ensureContinuousAudioEl();
          const num = Number(this.pageNum);
          const el = this._continuousAudioEl;

          const range = continuousAudioRanges.find(r => num >= r.start && num <= r.end);

          if (!range) {
            if (this._activeRange) {
              el.pause();
              el.removeAttribute("src");
              this._activeRange = null;
            }
            return;
          }
          if (this._activeRange === range) {
            return;
          }
          this._activeRange = range;
          el.src = `assets://mspfa/SBURB.exe/${range.src}`;
          el.currentTime = 0;
          el.play().catch(err => console.warn("Continuous audio failed:", err, el.src));
        },
        backpagefix() {
          if (!this.$el || typeof this.$el.querySelector !== "function") return;
          const back = this.$el.querySelector("#goback");
          if (!back) return;
          const target = backSkipMap[String(this.pageNum)];
          if (target !== undefined) {
            back.href = `/mspfa/SBURB.exe/${target}`;
          }else {
            return;
          }
        },
        autoplayPage() {
          switch (String(this.pageNum)) {
            case "23":
              if (this._page23Played) return;
              break;
            case "82":
              if (this._page82Played) return;
              break;

            case "94":
              if (this._page94Played) return;
              break;
            case "95":
              if (this._page95Played) return;
              break;
            case "96":
              if (this._page96Played) return;
              break;
            case "97":
              if (this._page96Played) return;
              break;

            case "143":
              if (this._page143Played) return;
              break;
            case "180":
              if (this._page180Played) return;
              break;
            case "201":
              if (this._page180Played) return;
              break;

            case "302":
              if (this._page302Played) return;
              break;
            case "308":
              if (this._page308Played) return;
              break;
            case "390":
              if (this._page390Played) return;
              break;

            case "402":
              if (this._page402Played) return;
              break;
            case "435":
              if (this._page435Played) return;
              break;
            case "476":
              if (this._page476Played) return;
              break;
            case "504":
              if (this._page504Played) return;
              break;
            case "557":
              if (this._page557Played) return;
              break;
            case "600":
              if (this._page600Played) return;
              break;
            case "713":
              if (this._page713Played) return;
              break;
            case "823":
              if (this._page823Played) return;
              break;
            case "827":
              if (this._page827Played) return;
              break;
            case "915":
              if (this._page915Played) return;
              break;

            default:
              this._page23Played = false;
              this._page82Played = false;
              this._page94Played = false;
              this._page95Played = false;
              this._page96Played = false;
              this._page97Played = false;
              this._page143Played = false;
              this._page180Played = false;
              this._page201Played = false;
              this._page302Played = false;
              this._page308Played = false;
              this._page390Played = false;
              this._page402Played = false;
              this._page435Played = false;
              this._page476Played = false;
              this._page504Played = false;
              this._page507Played = false;
              this._page557Played = false;
              this._page600Played = false;
              this._page713Played = false;
              this._page823Played = false;
              this._page827Played = false;
              this._page915Played = false;
              return;
          }

          const audio = this.$el.querySelector("#content audio.fishAudio");
          const video = this.$el.querySelector("#content video");
          if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {});

            switch(String(this.pageNum)) {
              case "23":
                this._page23Played = true;
                break;
              case "143":
                this._page143Played = true;
                break;
              case "302":
                this._page302Played = true;
                break;
              case "402":
                this._page402Played = true;
                break;
              case "476":
                this._page476Played = true;
                break;
              case "557":
                this._page557Played = true;
                break;
              case "713":
                this._page713Played = true;
                break;
              case "823":
                this._page823Played = true;
                break;
              case "915":
                this._page915Played = true;
                break;
            }
          }
          if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});

            switch(String(this.pageNum)) {
              case "82":
                this._page82Played = true;
                break;
              case "94":
                this._page94Played = true;
                break;
              case "95":
                this._page95Played = true;
                break;
              case "96":
                this._page96Played = true;
                break;
              case "97":
                this._page97Played = true;
                break;
              case "180":
                this._page180Played = true;
                break;
              case "201":
                this._page201Played = true;
                break;
              case "390":
                this._page390Played = true;
                break;
              case "435":
                this._page435Played = true;
                break;
              case "504":
                this._page504Played = true;
                break;
              case "600":
                this._page600Played = true;
                break;
              case "827":
                this._page827Played = true;
                break;
            }
          }
        },
        injectItchGame() {
          this.$el.querySelectorAll("#content .itchdanceGame:not([data-bound])").forEach(el => {
            el.style.width = "650px";
            el.style.height = "50px";
            const iframe = document.createElement("iframe");
            iframe.src="https://itch.io/embed/2608484"
            iframe.width = "150px";
            iframe.height = "50px";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            el.appendChild(iframe);
            el.setAttribute("data-bound", "true");
          });
          this.$el.querySelectorAll("#content .itchdiscGame:not([data-bound])").forEach(el => {
            el.style.width = "650px";
            el.style.height = "50px";
            const iframe = document.createElement("iframe");
            iframe.src="https://itch.io/embed/1962335"
            iframe.width = "150px";
            iframe.height = "50px";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            el.appendChild(iframe);
            el.setAttribute("data-bound", "true");
          });
          this.$el.querySelectorAll("#content .itchcatGame:not([data-bound])").forEach(el => {
            el.style.width = "650px";
            el.style.height = "50px";
            const iframe = document.createElement("iframe");
            iframe.src="https://itch.io/embed/2286676"
            iframe.width = "150px";
            iframe.height = "50px";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            el.appendChild(iframe);
            el.setAttribute("data-bound", "true");
          });
          this.$el.querySelectorAll("#content .itchwalkabbyGame:not([data-bound])").forEach(el => {
            el.style.width = "650px";
            el.style.height = "50px";
            const iframe = document.createElement("iframe");
            iframe.src="https://itch.io/embed/2932484"
            iframe.width = "150px";
            iframe.height = "50px";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            el.appendChild(iframe);
            el.setAttribute("data-bound", "true");
          });
          this.$el.querySelectorAll("#content .itchcatfightGame:not([data-bound])").forEach(el => {
            el.style.width = "650px";
            el.style.height = "50px";
            const iframe = document.createElement("iframe");
            iframe.src="https://itch.io/embed/3078119"
            iframe.width = "150px";
            iframe.height = "50px";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            el.appendChild(iframe);
            el.setAttribute("data-bound", "true");
          });
        },
        setPageFontSize() {
          if (this.storyId !== "SBURB.exe" && this.story?.title !== "SBURB.exe") return;

          const container = this.$el.querySelector("#container");
          if (!container) return;
          container.style.fontSize = "12px";
        },
        injectPageCSS() {
          const pageCSSMap = {
            "310": "extra css/54845.css",
            "311": "extra css/54845.css",
            "312": "extra css/54845.css",
            "313": "extra css/54845.css",
            "314": "extra css/54845.css",
            "315": "extra css/54845.css",
            "316": "extra css/54845.css",
            "317": "extra css/54845.css"
          };

          const cssPath = pageCSSMap[String(this.pageNum)];
          const existingLink = document.getElementById("uhc-custom-page-css");

          // Already correct (right stylesheet showing, or none needed and none present) — nothing to do
          if ((cssPath && existingLink && existingLink.dataset.page === String(this.pageNum)) ||
            (!cssPath && !existingLink)) {
            return;
            }

            // Remove whatever was there before switching/clearing
            if (existingLink) existingLink.remove();

            if (cssPath) {
              const link = document.createElement("link");
              link.id = "uhc-custom-page-css";
              link.rel = "stylesheet";
              link.href = `assets://mspfa/SBURB.exe/${cssPath}`;
              link.dataset.page = String(this.pageNum);
              document.head.appendChild(link);
            }
        },
      },
      mounted() {
        this.pwdoing()
        this.bindFishAudioButton();
        this.injectItchGame();
        this.injectPageCSS();
        this.setPageFontSize();
        this.autoplayPage();
        this.updateContinuousAudio();
        this.backpagefix();
      },
      updated() {
        this.pwdoing()
        this.bindFishAudioButton();
        this.injectItchGame();
        this.injectPageCSS();
        this.setPageFontSize();
        this.autoplayPage();
        this.updateContinuousAudio();
        this.backpagefix();
      },
      beforeDestroy() {
        const existingLink = document.getElementById("uhc-custom-page-css");
        if (existingLink) existingLink.remove();
      }
    }
  ],
  async asyncComputed(api) {
    const story = await api.readYamlAsync("./story.yaml")
    return {
      styles: [
        {
          body: await api.readFileAsync("./adventure.scss")
        }
      ],
      edit(archive){
        archive.mspfa['SBURB.exe'] = story
      }
    }
  }
}
