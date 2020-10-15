/*
 * @Author: Howie 
 * @Date: 2020-02-29 17:47:34 
 * @Last Modified by: Bryan
 * @Last Modified time: 2020-10-15 15:44:20
 */

import { createStore } from 'redux'

import reducer from '../reducer'

const initalState = {
  // EN/ZH 默认取值 EN 英文
  currentLanguage: 'EN',
  drawerstate: false,
  homeDataArr: [
    {
      type: 'about',
      pic: 'http://image.rovostudios.com/img/wap/homeBg2.jpg',
      showTextTitle: true,
      title: {
        ZH: '关于我们',
        EN: 'ABOUT'
      },
      text: {
        ZH: '洛弗影业是一家全流程影视制作公司，专注开发和制作院线电影。 \n我们致力于制作高美学视觉艺术的国际院线电影，团队集合了国内外众多电影制作人才，制作高水准的院线电影。 \n \n首部影片以科幻、悬疑、动作为题材的电影重工业针对主流年轻人喜爱，并计划在全球上映。公司与中国及好莱坞顶级编剧、导演、摄影师、剪辑师、视觉指导、创意总监、调色师团队合作。秉持“有使命感走向世界”的理念。',
        EN: 'ROVO Picture is a full-process film and television production company that is committed to producing international films of great asethetic value and impresing visual arts. \n \nExcellent film production talents are brought together both at home and abroad to produce high-quality films. \n \nOur first film is base on the theme of science fiction, suspense, and action. It is planned to released globally, taking the young generation as its target. Our company works with top Chinese and Hollywood screenwriters, directors, photographers, editors, visual effect advisors, creative directors, and colorists. The mission of going global is firmly adhered to.'
      }
    },
    {
      type: 'joinus',
      pic: '',
      showTextTitle: true,
      title: {
        ZH: '加入我们',
        EN: 'JOIN US'
      },
      text: {
        ZH: '职位：\n \n 院线电影编剧 \n 剧本顾问 \n 执行制片 \n 生产制片 \n 现场副导演 \n 演员副导演 \n 导演助理 \n 美术 \n 服装设计 \n 舞台美术设计 \n 摄影 \n 动画 \n 特效 \n \n 工作地点：洛杉矶、北京',
        EN: 'Jobs: \n \n Screenwriter \n Script Consultant \n Line Producer \n Unit Production Manager \n 1st Assiatant of Director \n 2nd Assistant of Director \n Directors Assistant \n Production Designer \n Costume Designer \n Visual Designer \n Director of Cinematography \n Animator \n Special Effect Artist \n \n Location: Beijing, Los Angeles'
      }
    }
  ],
  aboutText: {
    zh: '洛弗影业是一家全流程影视制作公司，专注开发和制作院线电影。 \n我们致力于制作高美学视觉艺术的国际院线电影，团队集合了国内外众多电影制作人才，制作高水准的院线电影。 \n \n首部影片以科幻、悬疑、动作为题材的电影重工业针对主流年轻人喜爱，并计划在全球上映。公司与中国及好莱坞顶级编剧、导演、摄影师、剪辑师、视觉指导、创意总监、调色师团队合作。秉持“有使命感走向世界”的理念。',
    en: 'ROVO Picture is a full-process film and television production company that is committed to producing international films of great asethetic value and impresing visual arts. \n \nExcellent film production talents are brought together both at home and abroad to produce high-quality films. \n \nOur first film is base on the theme of science fiction, suspense, and action. It is planned to released globally, taking the young generation as its target. Our company works with top Chinese and Hollywood screenwriters, directors, photographers, editors, visual effect advisors, creative directors, and colorists. The mission of going global is firmly adhered to.'
  },
  joinText: {
    zh: '招聘全职英文翻译 \n英语专业硕士毕业 \n翻译能力强，男女不限 \n工作地点：洛杉矶、纽约、北京 \n能适应美国工作，吃苦耐劳，薪资面谈 \n \n欢迎加入我们',
    en: 'We are looking for full-time fashion designers, film and television \ncharacter designers, and stagecraft designers. \nSkills Needed: Strong design capability. \nKey Resonsibilities: Concept clothing design, sci-fi costumes \ndesign, landscapes and props design. \nLocation: Los Angeles, New York, Beijing. \nWe hope you are able to work in the U.S. and bear hardships, \nsalary will be discussed in person. \nResumes and portfolios can be sent to the following mailbox.'
  }
}

export const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage,
    drawerstate: state.drawerstate,
    homeDataArr: state.homeDataArr
  }
}

const store = createStore(reducer, initalState)

export default store
