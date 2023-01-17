import { Router } from 'express';
import { createClient } from '@supabase/supabase-js';

const api_router = Router();
const supabase = createClient('https://kfotqgkwsxphtpkiublq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmb3RxZ2t3c3hwaHRwa2l1YmxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAzMjI4NzgsImV4cCI6MTk2NTg5ODg3OH0.HPdHmKVjueNgRe3ZkGm4Oppcs2TCLfUtN6OMVQP14B4')

api_router.get('', (req, res) => {
    res.status(200).send({ status: 'success', message: 'The BroadbandHub Blog API is running' });
})

api_router.get('/blog-posts', async (req, res) => {

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(*)')
        .match({ active: true, published: true })
        .order('published_at', { ascending: false });

    if (error || !data) {
        console.error(error);
        return res.status(500).send({ status: 'failed', message: 'Internal Server Error' });
    }
    else {
        return res.status(200).send(data);
    }

})

api_router.get('/blog-posts/:public_id', async (req, res) => {

    const public_id = req.params['public_id'];

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(*)')
        .match({ active: true, published: true, public_id })
        .order('published_at', { ascending: false })
        .maybeSingle();

    if (error) {
        console.error(error);
        return res.status(500).send({ status: 'failed', message: 'Internal Server Error' });
    }
    else {
        return res.status(200).send(data);
    }

})

export default api_router;