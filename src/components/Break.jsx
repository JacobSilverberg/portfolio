import PropTypes from 'prop-types';

export function Break ({ mt = 24, mb = 24 }) {
    Break.propTypes = {
        mt:PropTypes.number,
        mb:PropTypes.number
    }
    
    return (
        <hr className={`h-1 mx-auto mt-${mt} mb-${mb} w-2/3 bg-slate-200`}>
        </hr>
    )
}
