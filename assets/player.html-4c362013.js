import{_ as l,r as i,o,c as u,a as t,b as d,d as e,w as a,e as n}from"./app-6ef24849.js";const r={},c=n('<h1 id="播放器" tabindex="-1"><a class="header-anchor" href="#播放器" aria-hidden="true">#</a> 播放器</h1><h2 id="web-播放器信息" tabindex="-1"><a class="header-anchor" href="#web-播放器信息" aria-hidden="true">#</a> web 播放器信息</h2><p>web 播放器的信息接口，提供正常播放需要的元数据，包括：智能防挡弹幕、字幕、章节看点等。</p><blockquote><p>https://api.bilibili.com/x/player/wbi/v2</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url 参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件 avid</td><td>必要 (可选)</td><td>aid 与 bvid 任选</td></tr><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td>必要 (可选)</td><td>aid 与 bvid 任选</td></tr><tr><td>cid</td><td>num</td><td>稿件 cid</td><td>必要</td><td></td></tr><tr><td>w_rid</td><td>str</td><td>WBI 签名</td><td>不必要</td><td></td></tr><tr><td>wts</td><td>num</td><td>当前 unix 时间戳</td><td>不必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>视频 aid</td><td></td></tr><tr><td>bvid</td><td>str</td><td>视频 bvid</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频 cid</td><td></td></tr><tr><td>dm_mask</td><td>obj</td><td></td><td>webmask 信息（如果没有这一项，说明这个视频没有防挡功能）</td></tr><tr><td>subtitle</td><td>obj</td><td></td><td>字幕信息（需要登录，不登录此项内容为 <code>[]</code> ）</td></tr><tr><td>view_points</td><td>array</td><td></td><td>章节看点信息</td></tr><tr><td>其他</td><td>...</td><td></td><td>主要是观看记录、使用者等级权限、背景音乐等信息</td></tr></tbody></table><p><code>dm_mask</code>对象（如果有）：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频 cid</td><td></td></tr><tr><td>plat</td><td>num</td><td>未知</td><td></td></tr><tr><td>fps</td><td>num</td><td>webmask 取样 fps</td><td></td></tr><tr><td>time</td><td>num</td><td>未知</td><td></td></tr><tr><td>mask_url</td><td>str</td><td>webmask 资源 url</td><td></td></tr></tbody></table>',14),b=n(`<p><code>subtitle</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>allow_submit</td><td>bool</td><td>true</td><td></td></tr><tr><td>lan</td><td>str</td><td>&quot;&quot;</td><td></td></tr><tr><td>lan_doc</td><td>str</td><td>&quot;&quot;</td><td></td></tr><tr><td>subtitles</td><td>array</td><td></td><td>不登录为 <code>[]</code></td></tr></tbody></table><p><code>subtitles</code> 数组内的元素：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>ai_status</td><td>num</td><td></td><td></td></tr><tr><td>ai_type</td><td>num</td><td></td><td></td></tr><tr><td>id</td><td>num</td><td></td><td></td></tr><tr><td>id_str</td><td>str</td><td></td><td>和 id 不一样</td></tr><tr><td>is_lock</td><td>bool</td><td></td><td></td></tr><tr><td>lan</td><td>str</td><td>语言类型英文字母缩写</td><td></td></tr><tr><td>lan_doc</td><td>str</td><td>语言类型中文名称</td><td></td></tr><tr><td>subtitle_url</td><td>str</td><td>资源 url 地址</td><td></td></tr><tr><td>type</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>view_point</code> 数组内的元素：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>content</td><td>num</td><td>章节名</td><td></td></tr><tr><td>from</td><td>num</td><td></td><td></td></tr><tr><td>to</td><td>num</td><td></td><td></td></tr><tr><td>type</td><td>num</td><td></td><td></td></tr><tr><td>imgUrl</td><td>str</td><td>图片资源地址</td><td></td></tr><tr><td>logoUrl</td><td>str</td><td>&quot;&quot;</td><td></td></tr></tbody></table><p>示例:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;https://api.bilibili.com/x/player/wbi/v2?aid=515345690&amp;cid=825851971&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
    &quot;code&quot;: 0,
    &quot;message&quot;: &quot;0&quot;,
    &quot;ttl&quot;: 1,
    &quot;data&quot;: {
        &quot;aid&quot;: 515345690,
        &quot;bvid&quot;: &quot;BV1Fg411D7Jy&quot;,
        ... // 省略
        &quot;dm_mask&quot;: {
            &quot;cid&quot;: 825851971,
            &quot;plat&quot;: 0,
            &quot;fps&quot;: 30,
            &quot;time&quot;: 0,
            &quot;mask_url&quot;: &quot;//upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask?trid=219266863a1442baa05086b4285ba923B&amp;orderid=0,1&amp;logo=00000000&quot;
        },
        &quot;view_points&quot;: [
            {
                &quot;type&quot;: 2,
                &quot;from&quot;: 0,
                &quot;to&quot;: 27,
                &quot;content&quot;: &quot;狗啃的&quot;,
                &quot;imgUrl&quot;: &quot;http://i0.hdslb.com/bfs/vchapter/825851971_0.jpg&quot;,
                &quot;logoUrl&quot;: &quot;&quot;
            },
            {
                &quot;type&quot;: 2,
                &quot;from&quot;: 27,
                &quot;to&quot;: 63,
                &quot;content&quot;: &quot;椒牌泡菜&quot;,
                &quot;imgUrl&quot;: &quot;http://i0.hdslb.com/bfs/vchapter/825851971_27.jpg&quot;,
                &quot;logoUrl&quot;: &quot;&quot;
            }, ... // 省略
        ],
        &quot;subtitle&quot;: {
            &quot;allow_submit&quot;: true,
            &quot;lan&quot;: &quot;&quot;,
            &quot;lan_doc&quot;: &quot;&quot;,
            &quot;subtitles&quot;: [], // 未登录，下面是登录的版本
            &quot;subtitles&quot;:[
                {
                    &quot;id&quot;: 1042985852759993300,
                    &quot;lan&quot;: &quot;ai-zh&quot;,
                    &quot;lan_doc&quot;: &quot;中文（自动生成）&quot;,
                    &quot;is_lock&quot;: false,
                    &quot;subtitle_url&quot;: &quot;//aisubtitle.hdslb.com/bfs/ai_subtitle/prod/5153456908258519712094280c7c2884b77929bab82f64530f?auth_key=1714795727-a8eb254b60bc4a73bc8662da51005340-0-1c305894e48e959979b163636461fb8f&quot;,
                    &quot;type&quot;: 1,
                    &quot;id_str&quot;: &quot;1042985852759993344&quot;,
                    &quot;ai_type&quot;: 0,
                    &quot;ai_status&quot;: 2
                }
            ]
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="播放反馈" tabindex="-1"><a class="header-anchor" href="#播放反馈" aria-hidden="true">#</a> 播放反馈</h2><blockquote><p>https://app.bilibili.com/x/resource/laser2</p></blockquote><p><em>请求方式: POST</em></p><p>注: 该接口不传 Cookie</p><p><strong>URL参数:</strong></p>`,14),p=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),v=t("tr",null,[t("td",null,"mid"),t("td",null,"num"),t("td",null,"当前用户 mid"),t("td",null,"不必要"),t("td",null,"未登录为空")],-1),m=t("tr",null,[t("td",null,"buvid"),t("td",null,"str"),t("td",null,"BUVID (APP) 或 buvid3 (Web)"),t("td",null,"必要"),t("td",null,"可为任意非空字符串")],-1),h=t("tr",null,[t("td",null,"app_key"),t("td",null,"str"),t("td",null,"APP 密钥"),t("td",null,"必要"),t("td",null,[d("Web: web_player"),t("br"),d("可为任意非空字符串")])],-1),q=t("td",null,"url",-1),_=t("td",null,"str",-1),k=t("td",null,"日志 URL",-1),y=t("td",null,"非必要",-1),g=t("tr",null,[t("td",null,"task_type"),t("td",null,"num"),t("td",null,"任务类型"),t("td",null,"非必要"),t("td",null,[d("300: 播放卡顿"),t("br"),d("301: 进度条君无法调戏"),t("br"),d("354: 校园网无法访问"),t("br"),d("303: 弹幕无法显示"),t("br"),d("553: 跳过首尾时间有误"),t("br"),d("304: 出现浮窗广告"),t("br"),d("305: 无限小电视"),t("br"),d("302: 音画不同步"),t("br"),d("306: 黑屏"),t("br"),d("307: 其他")])],-1),f=n(`<p><strong>JSON回复:</strong></p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功<br>-400: 请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>task_id</td><td>num</td><td>任务 ID?</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><p>播放反馈无限小电视, 不登录, 不传文件, buvid 为 <code>chenrui-in-icu</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;https://app.bilibili.com/x/resource/laser2&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;buvid=chenrui-in-icu&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;app_key=web_player&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&quot;task_type=305&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;task_id&quot;</span><span class="token operator">:</span> <span class="token number">850448532</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8);function w(x,j){const s=i("RouterLink");return o(),u("div",null,[c,t("p",null,[d("解析 webmask 请看 "),e(s,{to:"/docs/danmaku/webmask.html"},{default:a(()=>[d("智能防挡弹幕")]),_:1})]),b,t("table",null,[p,t("tbody",null,[v,m,h,t("tr",null,[q,_,k,y,t("td",null,[d("从 "),e(s,{to:"/docs/creativecenter/upload.html#%E4%B8%8A%E4%BC%A0%E6%8E%A5%E5%8F%A3"},{default:a(()=>[d("上传接口")]),_:1}),d(" 得到的 upos 协议 URL")])]),g])]),f])}const B=l(r,[["render",w],["__file","player.html.vue"]]);export{B as default};
