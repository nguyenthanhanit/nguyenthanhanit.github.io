# BLOG
<div v-for="post in $site.pages.filter(p => p.path.includes('/post'))">
    <router-link v-if="post.relativePath !== 'post/README.md'" :to="post.path" class="flex">
        <p>{{ post.frontmatter.created }}</p>
        <p class="pl-5 uppercase text-black font-bold">{{ post.title }}</p>
    </router-link>
</div>