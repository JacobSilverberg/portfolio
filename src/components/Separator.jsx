import PropTypes from 'prop-types';

export function Separator ({ mt = 24, mb = 24 }) {
    Separator.propTypes = {
        mt:PropTypes.number,
        mb:PropTypes.number
    }
    
    return (
        <hr className={`h-1 mt-${mt} mb-${mb} mx-auto w-2/3 bg-slate-200`}>
        </hr>
    )
}
