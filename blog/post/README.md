# BLOG
<div v-for="post in $site.pages.filter(p => p.path.includes('/post'))">
    <router-link v-if="post.relativePath !== 'post/README.md'" :to="post.path" class="flex flex gap-4 text-black font-bold" style="text-transform: uppercase;">
        <p>{{ post.frontmatter.created }}</p>
        <p>{{ post.title }}</p>
    </router-link>
</div>