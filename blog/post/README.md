# BLOG
<div>
    <table>
        <tr v-for="post in $site.pages.filter(p => p.path.includes('/post'))">
            <router-link v-if="post.relativePath !== 'post/README.md'" :to="post.path">
                <td>{{ post.frontmatter.created }}</td>
                <td class="pl-5 uppercase text-black font-bold">{{ post.title }}</td>
            </router-link>
        </tr>
    </table>
</div>