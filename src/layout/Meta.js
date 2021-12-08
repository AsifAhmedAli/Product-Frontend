import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppConfig } from '../utils/AppConfig';

const Meta = (props) => {
    const router = useRouter();

    return (
        <>
            <NextSeo
                title={props.title}
                description={props.description}
                openGraph={{
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: AppConfig.locale,
                    site_name: AppConfig.site_name,
                }}
            />
        </>
    );
};

export default Meta;