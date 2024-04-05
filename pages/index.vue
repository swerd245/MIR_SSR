<template>
    <div class="main-wrap">
        <div class="main-page inner">
            <div class="main-title">
                <div class="slogan">
                    <span class="subtitle">동양무협 RPG의 지존</span>
                    <h2 class="title">미르의 전설2</h2>
                </div>
                <p class="mir-explain">
                    1세대 온라인게임 시장에 동양적 색채와 스토리, 그리고 탄탄한 밸런싱으로<br />
                    인기를 끈 대표무협 MMORPG입니다.<br />
                    초기 서양풍의 판타지 게임이 주류였던 국내 온라인게임시장에서 무협게임의
                    선두주자로 <br />
                    꾸준히 한 길을 걸어왔으며, 거대한 중화대륙에 한국 온라인 게임의 자존심을 새겨
                    넣은 <br />
                    자랑스러운 이름으로 그 우수한 게임성은 해외에서도 인정받아 세계에 그 이름을
                    떨치고 있습니다.
                </p>
                <div class="game-link-wrap">
                    <a href="#" class="game-link" >
                        <strong>미르의전설2</strong> 게임하러가기
                    </a>
                </div>
            </div>
        </div>

        <!-- <Carousel /> -->
        <div class="fullscreen-vbg">
            <video loop muted autoplay>
                <source src="@/assets/video/home_bg.mp4" />
            </video>
        </div>
    </div>
</template>
<script setup lang="ts">
    console.log("!");
</script>

<style lang="scss" scoped>
.main-wrap{
    height: 100%;
    position: relative;
    background:url($cdn + "/main/home_bg.png") center center/cover no-repeat;   
}

.inner{
    
    min-height: 50%;
    position: relative;
    width:calc(100% - 33.75rem);
    margin:0 auto;    
    z-index : 10;
}    

.main-title{
    padding:16.9vh 0 6.375rem;  
    
    .slogan{
        margin-bottom:1.5rem;    
    }

    .subtitle{
        font-size:1.375rem;
        line-height:1.375rem;
        letter-spacing: -0.0719rem;
        color: #fff;
        /*color:$white;*/
    }

    .title{
        padding-top:0.75rem;
        font-size: 2.8125rem;
        line-height:2.8125rem;
        font-weight: 700;
        letter-spacing: -0.0563rem;
         background-image: linear-gradient(240deg, #63bd5a 80%, #48bb8c 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mir-explain{
        font-size:0.9375rem;
        line-height: 1.5rem;
        letter-spacing:-0.0187rem;
        color:#b2b1b1;
    }

    .game-link-wrap{
        margin-top:3rem;
        font-weight: 400;
        letter-spacing: -0.0563rem;

        .game-link{
            position: relative;
            font-size:1.125rem;
            line-height: 1.125rem;
            padding:0.875rem 3.75rem 0.875rem 1.3125rem;
            border: solid 1px #2e6a3d;
            color:$brand-color;
            
            transition: all 0.3s ease-in-out;
            &::after{
                content: "";
                display: block;
                position: absolute;
                top: 45%;
                right: 8%;
                width:1.9375rem;
                height : 0.6875rem;
                transform: translateY(-50%);
                transition: all 0.3s ease-in-out;
                background:url($cdn + "/main/arrow.png") 92% 45% no-repeat;
            }

            &:hover{
                background-color:#44b761;
                color:#fff;
                &::after{
                    filter: brightness(4);
                }
            }

            strong{
                font-size:1.125rem;
                line-height: 1.125rem;
                font-weight: 700;
            }
        }
    }
}

.MOBILE{
    .main-wrap{
        background: #27282b;
        .main-page{
            min-height: 50%;
            width : 100%;
            background:url($cdn + "/main/m_home_bg.png") top center no-repeat;
            background-size: cover;   
        }
    }
    .main-title{
        padding:20.313rem 0 6.25rem;  
        text-align: center;
    
        .slogan{
            margin-bottom:1.5rem;    
        }

        .subtitle{
            font-size:1.625rem;
            line-height:0.42;
            letter-spacing: normal;
            color:$white;
        }

        .title{

            padding-top:1rem;
            font-size: 3.438rem;
            line-height:3.438rem;
            font-weight: 700;
            letter-spacing: normal;
            background: none;
            color:$brand-color;
            -webkit-text-fill-color:unset;
        }
        .game-link-wrap{
            margin-top:1.25rem;
            font-weight: 700;
            letter-spacing: 0.08rem;
            display: flex;
            justify-content: center;
            .game-link{
                font-size:1.594rem;
                line-height: 1.594rem;
                padding:1.563rem 4.5rem 1.563rem 1.688rem;
                color:$white;
                background:url($cdn + "/main/arrow_white.png") 92% 45% no-repeat, $brand-color;
                background-size: 2.625rem 1rem;
                
                &::after{
                    display:none;
                }
            }
        }
    }
    
}

.fullscreen-vbg{
    position: absolute;
    top:0%;
    left:50%;
    width:100%;
    height:100%;
    overflow: hidden;
    transform: translateX(-50%);
    video{
        width:100%;
        height:100%;
        object-fit: cover;
    }
}

/*@media (min-width: 1920px){
        
    .fullscreen-vbg{
        top:5%;
    }
}*/
</style>