"use strict";(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[71],{8992:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-45a87c2c",path:"/guide/wx.html",title:"4.2 小程序",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"4.2.1 登录",slug:"_4-2-1-登录",children:[]},{level:3,title:"4.2.2 注册",slug:"_4-2-2-注册",children:[]},{level:3,title:"4.2.3 检查绑定",slug:"_4-2-3-检查绑定",children:[]}],filePathRelative:"guide/wx.md",git:{updatedTime:1630972225e3}}},9083:(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});const a=(0,n(6252).uE)('<h1 id="_4-2-小程序" tabindex="-1"><a class="header-anchor" href="#_4-2-小程序" aria-hidden="true">#</a> 4.2 小程序</h1><h3 id="_4-2-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-2-1-登录" aria-hidden="true">#</a> 4.2.1 登录</h3><ul><li>接口地址：/api/wx/student/auth/bind</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     userName: student  //用户名\n     password: 123456   //密码\n     code: 023BNuFa1CQ14B07KVHa16RHM94BNuF0   //授权码\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;950efd96-ecd1-4482-9204-c54cd3325a8a&quot;  //登录Token\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-2-注册" tabindex="-1"><a class="header-anchor" href="#_4-2-2-注册" aria-hidden="true">#</a> 4.2.2 注册</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    userName: student2  //用户名\n    password: 123456 //密码\n    userLevel: 1   //年级\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-检查绑定" tabindex="-1"><a class="header-anchor" href="#_4-2-3-检查绑定" aria-hidden="true">#</a> 4.2.3 检查绑定</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    code: 063MMx000eoAnM15Tj400hq8l64MMx0Z  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;2fa8cbb7-6be9-4e54-bc68-1265348cf703&quot;  //登录令牌\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',16),l={render:function(e,s){return a}}}}]);